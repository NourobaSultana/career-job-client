import React, { Suspense } from "react";
import ApplicationStat from "./ApplicationStat";
import ApplicationList from "./ApplicationList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div className="mt-20">
      <ApplicationStat></ApplicationStat>
      <Suspense fallback={"Loading Your Application"}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
