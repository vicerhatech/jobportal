const jobDetailsContainer = document.getElementById("jobDetailsContainer");

function renderJobDetails() {
  const selectedJobId = getSelectedJob();
  const job = jobs.find((item) => item.id === selectedJobId);

  if (!job) {
    jobDetailsContainer.innerHTML = `
      <div class="card empty-state">
        <h2>Job not found</h2>
        <p>Please go back and select a job again.</p>
        <a href="jobs.html" class="btn btn-primary mt-20">Back to Jobs</a>
      </div>
    `;
    return;
  }

  jobDetailsContainer.innerHTML = `
    <div class="details-layout">
      <div class="card details-main">
        <div class="details-section">
          <span class="badge">${job.type}</span>
          <h1 class="form-title" style="margin-top: 12px;">${job.title}</h1>
          <p class="company">${job.company}</p>

          <div class="info-bar">
            <span>${job.location}</span>
            <span>${job.salary}</span>
            <span>${job.category}</span>
          </div>
        </div>

        <div class="details-section">
          <h2>About the Role</h2>
          <p class="muted">${job.description}</p>
        </div>

        <div class="details-section">
          <h2>Requirements</h2>
          <ul>
            ${job.requirements.map((item) => `<li>• ${item}</li>`).join("")}
          </ul>
        </div>

        <div class="details-section">
          <h2>Benefits</h2>
          <ul>
            ${job.benefits.map((item) => `<li>• ${item}</li>`).join("")}
          </ul>
        </div>
      </div>

      <div class="card details-side">
        <h3 style="margin-bottom: 18px;">Job Overview</h3>

        <div class="overview-item">
          <strong>Company</strong>
          <p class="muted">${job.company}</p>
        </div>

        <div class="overview-item">
          <strong>Location</strong>
          <p class="muted">${job.location}</p>
        </div>

        <div class="overview-item">
          <strong>Salary</strong>
          <p class="muted">${job.salary}</p>
        </div>

        <div class="overview-item">
          <strong>Job Type</strong>
          <p class="muted">${job.type}</p>
        </div>

        <div class="overview-item">
          <strong>Category</strong>
          <p class="muted">${job.category}</p>
        </div>

        <a href="apply.html" class="btn btn-primary" style="width: 100%; margin-top: 20px; text-align: center;">
          Apply Now
        </a>
      </div>
    </div>
  `;
}

renderJobDetails();