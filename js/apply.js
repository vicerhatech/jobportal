const applyHeader = document.getElementById("applyHeader");
const applicationForm = document.getElementById("applicationForm");
const formMessage = document.getElementById("formMessage");

const selectedJobId = getSelectedJob();
const selectedJob = jobs.find((job) => job.id === selectedJobId);

if (!selectedJob) {
  applyHeader.innerHTML = `
    <h1 class="form-title">No Job Selected</h1>
    <p class="form-subtitle">Please go back and choose a job before applying.</p>
    <a href="jobs.html" class="btn btn-primary">Back to Jobs</a>
  `;
  applicationForm.classList.add("hidden");
} else {
  applyHeader.innerHTML = `
    <h1 class="form-title">Apply for ${selectedJob.title}</h1>
    <p class="form-subtitle">${selectedJob.company} • ${selectedJob.location} • ${selectedJob.type}</p>
  `;
}

if (applicationForm) {
  applicationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const location = document.getElementById("location").value.trim();
    const coverLetter = document.getElementById("coverLetter").value.trim();
    const cvName = document.getElementById("cvName").value.trim();

    if (!fullName || !email || !phone || !location || !coverLetter || !cvName) {
      alert("Please fill in all fields.");
      return;
    }

    const application = {
      id: Date.now(),
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      company: selectedJob.company,
      fullName,
      email,
      phone,
      location,
      coverLetter,
      cvName,
      appliedAt: new Date().toLocaleDateString(),
      status: "Submitted"
    };

    addApplication(application);

    applicationForm.reset();
    applicationForm.classList.add("hidden");
    formMessage.classList.remove("hidden");
    formMessage.innerHTML = `
      <h2 style="color: var(--success); margin-bottom: 10px;">Application Submitted Successfully</h2>
      <p>Your application for <strong>${selectedJob.title}</strong> has been saved.</p>
      <div class="mt-20">
        <a href="applications.html" class="btn btn-primary">View My Applications</a>
      </div>
    `;
  });
}