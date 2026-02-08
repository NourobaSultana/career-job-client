import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = useAuth();
  console.log(jobId, user);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedIn.value;
    const github = form.linkedIn.value;
    const resume = form.resume.value;
    console.log(linkedIn, github, resume);
    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="">
      <div>
        <h2>
          Apply for this job: <Link to={`/jobs/${jobId}`}>Details</Link>{" "}
        </h2>
      </div>
      <div>
        <form onSubmit={handleForm}>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <legend className="fieldset-legend">Page details</legend>

            <label className="label">Linked In</label>
            <input
              type="url"
              name="linkedIn"
              className="input"
              placeholder="LinkedIn Link"
            />

            <label className="label">Git Hub</label>
            <input
              type="url"
              name="gitHub"
              className="input"
              placeholder="GitHub link "
            />

            <label className="label">Resume</label>
            <input
              type="url"
              name="resume"
              className="input"
              placeholder="Resume Link"
            />

            <input type="submit" className="btn" value="Apply" />
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
