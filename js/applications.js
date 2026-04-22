const applicationsList = document.getElementById("applicationsList");

function deleteApplication(applicationId) {
  const applications = getApplications().filter((app) => app.id !== applicationId);
  saveApplications(applications);
  renderApplications();
}

function renderApplications() {
  const applications = getApplications();

  if (applications.length === 0) {
    applicationsList.innerHTML = `
      <div class="card empty-state">
        <h2>No applications yet</h2>
        <p>You have not submitted any application.</p>
        <a href="jobs.html" class="btn btn-primary mt-20">Browse Jobs</a>
      </div>
    `;
    return;
  }

  applicationsList.innerHTML = applications
    .map(
      (app) => `
      <div class="card application-card">
        <h2>${app.jobTitle}</h2>
        <p class="company">${app.company}</p>

        <div class="info-bar">
          <span>Applicant: ${app.fullName}</span>
          <span>Email: ${app.email}</span>
          <span>Date: ${app.appliedAt}</span>
          <span>Status: ${app.status}</span>
        </div>

        <p class="muted"><strong>Phone:</strong> ${app.phone}</p>
        <p class="muted"><strong>Location:</strong> ${app.location}</p>
        <p class="muted"><strong>CV:</strong> ${app.cvName}</p>
        <p class="muted"><strong>Cover Letter:</strong> ${app.coverLetter}</p>

        <div class="mt-20">
          <button class="btn btn-danger" onclick="deleteApplication(${app.id})">Delete</button>
        </div>
      </div>
    `
    )
    .join("");
}

renderApplications();