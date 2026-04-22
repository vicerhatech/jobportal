const jobsList = document.getElementById("jobsList");
const keywordFilter = document.getElementById("keywordFilter");
const locationFilter = document.getElementById("locationFilter");
const typeFilter = document.getElementById("typeFilter");
const categoryFilter = document.getElementById("categoryFilter");
const clearFiltersBtn = document.getElementById("clearFiltersBtn");

function renderJobs(jobArray) {
  if (!jobsList) return;

  if (jobArray.length === 0) {
    jobsList.innerHTML = `
      <div class="card empty-state">
        <h3>No jobs found</h3>
        <p>Try adjusting your search or filters.</p>
      </div>
    `;
    return;
  }

  jobsList.innerHTML = jobArray
    .map(
      (job) => `
      <div class="card job-list-card">
        <div class="job-list-card-top">
          <div>
            <h3>${job.title}</h3>
            <p class="company">${job.company}</p>

            <div class="job-meta">
              <span>${job.location}</span>
              <span>${job.salary}</span>
              <span>${job.type}</span>
              <span>${job.category}</span>
            </div>

            <p>${job.description}</p>

            <div class="job-tags">
              <span class="badge">${job.category}</span>
              <span class="badge">${job.type}</span>
            </div>
          </div>

          <div class="job-actions">
            <button class="btn btn-outline" onclick="goToDetails(${job.id})">View Details</button>
            <button class="btn btn-primary" onclick="goToApply(${job.id})">Apply Now</button>
          </div>
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

function goToApply(jobId) {
  saveSelectedJob(jobId);
  window.location.href = "apply.html";
}

function filterJobs() {
  const keyword = keywordFilter.value.toLowerCase().trim();
  const location = locationFilter.value;
  const type = typeFilter.value;
  const category = categoryFilter.value;

  const filteredJobs = jobs.filter((job) => {
    const matchKeyword =
      job.title.toLowerCase().includes(keyword) ||
      job.company.toLowerCase().includes(keyword) ||
      job.category.toLowerCase().includes(keyword);

    const matchLocation = !location || job.location === location;
    const matchType = !type || job.type === type;
    const matchCategory = !category || job.category === category;

    return matchKeyword && matchLocation && matchType && matchCategory;
  });

  renderJobs(filteredJobs);
}

function loadSavedSearch() {
  const savedKeyword = localStorage.getItem("jobSearchKeyword") || "";
  const savedLocation = localStorage.getItem("jobSearchLocation") || "";

  keywordFilter.value = savedKeyword;
  locationFilter.value = savedLocation;
  filterJobs();

  localStorage.removeItem("jobSearchKeyword");
  localStorage.removeItem("jobSearchLocation");
}

[keywordFilter, locationFilter, typeFilter, categoryFilter].forEach((element) => {
  element.addEventListener("input", filterJobs);
  element.addEventListener("change", filterJobs);
});

clearFiltersBtn.addEventListener("click", () => {
  keywordFilter.value = "";
  locationFilter.value = "";
  typeFilter.value = "";
  categoryFilter.value = "";
  filterJobs();
});

loadSavedSearch();