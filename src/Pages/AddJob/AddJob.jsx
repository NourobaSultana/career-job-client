import React from "react";
import useAuth from "/home/toma/best-website/career-job2-client/src/hooks/useAuth.jsx";
import axios from "axios";
import Swal from "sweetalert2";
const AddJob = () => {
  const { user } = useAuth();
  const hanldeAddJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data);
    // dalary range process
    const { min, max, currency, ...newjob } = data;
    newjob.salaryRange = { min, max, currency };
    // requirements process
    newjob.requirements = newjob.requirements
      .split(",")
      .map((req) => req.trim());

    // responsibilities process
    newjob.responsibilities = newjob.responsibilities
      .split(",")
      .map((req) => req.trim());

    newjob.status = "active";
    axios
      .post("http://localhost:3000/jobs", newjob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This new job has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(newjob);
  };
  return (
    <div className="">
      <h2>Add job</h2>
      <form onSubmit={hanldeAddJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            className="input"
            placeholder="Job Title"
          />

          <label className="label">Description</label>
          <input
            type="text"
            name="description"
            className="input"
            placeholder="Job Dscription"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input"
            placeholder="Location"
          />

          <label className="label">Logo</label>
          <input
            type="text"
            name="logo"
            className="input"
            placeholder="Company Logo"
          />
        </fieldset>

        {/* Job Type */}

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="On-site"
              aria-label="On-site"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job Category"
            name="category"
            className="select"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>
        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Application Deadline </legend>

          <input type="datetime-local" name="deadline" className="input" />
        </fieldset>
        {/* Salary Range */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Salary Range</legend>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>

              <select
                defaultValue="Job Category"
                name="currency"
                className="select"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>
        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Description</legend>
          <textarea
            className="textarea"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>
        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea"
            name="requirements"
            placeholder="Job Requirement (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea"
            name="responsibilities"
            placeholder="Job Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            className="input"
            placeholder="HR Email"
          />
        </fieldset>
        <input type="submit" className="btn" value="Add Job" />
      </form>
    </div>
  );
};

export default AddJob;
