function getApplications() {
  const applications = localStorage.getItem("applications");
  return applications ? JSON.parse(applications) : [];
}

function saveApplications(applications) {
  localStorage.setItem("applications", JSON.stringify(applications));
}

function addApplication(application) {
  const applications = getApplications();
  applications.push(application);
  saveApplications(applications);
}

function saveSelectedJob(jobId) {
  localStorage.setItem("selectedJobId", JSON.stringify(jobId));
}

function getSelectedJob() {
  const jobId = localStorage.getItem("selectedJobId");
  return jobId ? JSON.parse(jobId) : null;
}