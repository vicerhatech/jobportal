const featuredJobsContainer = document.getElementById("featuredJobs");
const heroSearchForm = document.getElementById("heroSearchForm");

function renderFeaturedJobs() {
  if (!featuredJobsContainer) return;

  const featuredJobs = jobs.slice(0, 3);

  featuredJobsContainer.innerHTML = featuredJobs
    .map(
      (job) => `
      <div class="card job-card">
        <span class="badge">${job.type}</span>
        <h3>${job.title}</h3>
        <p class="company">${job.company}</p>

        <div class="job-meta">
          <span>${job.location}</span>
          <span>${job.category}</span>
        </div>

        <p class="small-text">${job.description.slice(0, 90)}...</p>

        <div class="job-actions">
          <span class="salary">${job.salary}</span>
          <button class="btn btn-dark" onclick="goToDetails(${job.id})">View Details</button>
        </div>
      </div>
    `
    )
    .join("");
}

function goToDetails(jobId) {
  saveSelectedJob(jobId);
  window.location.href = "job-details.html";
}

if (heroSearchForm) {
  heroSearchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const keyword = document.getElementById("heroKeyword").value.trim();
    const location = document.getElementById("heroLocation").value.trim();

    localStorage.setItem("jobSearchKeyword", keyword);
    localStorage.setItem("jobSearchLocation", location);

    window.location.href = "jobs.html";
  });
}

renderFeaturedJobs();