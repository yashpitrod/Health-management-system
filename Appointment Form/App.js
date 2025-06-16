const doctorsByDepartment = {
      cardiology: ["Dr.Ramesh Mehta", "Dr.Gauri Kabra"],
      neurology: ["Dr.Vaani Kapoor", "Dr.Deeptiranjan Tripathi"],
      Pediatrician: ["Dr.Darshan Bhatt", "Dr.Faran Khan"]
    };

    function updateDoctors() {
      const department = document.getElementById("department").value;
      const doctorSelect = document.getElementById("doctor");

      doctorSelect.innerHTML = '<option value="" disabled selected>Select Doctor</option>';

      if (doctorsByDepartment[department]) {
        doctorsByDepartment[department].forEach(doc => {
          const option = document.createElement("option");
          option.value = doc;
          option.textContent = doc;
          doctorSelect.appendChild(option);
        });
      }
    }