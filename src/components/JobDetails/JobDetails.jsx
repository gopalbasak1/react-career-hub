import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstroage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(jobs);

    const handleApplyJob = () =>{
        saveJobApplication(idInt);
        toast('You have applied successful')
    }

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl text-center font-extrabold mt-2">Job Details</h2>
                  <div className="mt-32 p-2">
                    <h2 className="text-[#757575] text-base font-medium mb-6"><span className="text-[#1A1919] text-base font-extrabold"> Job Description: </span>{job.job_description}</h2>
                    <h2 className="text-[#757575] text-base font-medium mb-6"><span className="text-[#1A1919] text-base font-extrabold"> Job Responsibility: </span> {job.job_responsibility}</h2>
                    <h2 className="text-[#757575] text-base font-medium mb-6"><span className="text-[#1A1919] text-base font-extrabold"> Educational Requirements: </span> {job.educational_requirements}</h2>
                    <h2 className="text-[#757575] text-base font-medium mb-6"><span className="text-[#1A1919] text-base font-extrabold"> Experiences: </span> {job.experiences}</h2>
                   
                  </div>

                </div>
                <div className="border bg-slate-100">
                     <div className="p-2">
                             <h2 className="text-xl font-extrabold my-4">
                            Job Details
                        </h2>
                        <hr />
                       <div className="my-4">
                         <p className="text-[#474747] font-medium text-base mt-2"><span className="text-[#474747] font-bold text-base">Salary:</span> {job.salary} (Per Month)</p>
                        <p className="text-[#474747] font-medium text-base mt-2"><span className="text-[#474747] font-bold text-base">Job Title:</span> {job.job_title}</p>
                       </div>
                     </div>
                     <div className="p-2">
                        <h2 className="text-xl font-extrabold my-4">Contact Information</h2>
                        <hr />
                        <div className="my-4">
                            <p className="text-[#474747] font-medium text-base mt-2"><span className="text-[#474747] font-bold text-base">Phone:</span> {job.contact_information.phone}</p>
                            <p className="text-[#474747] font-medium text-base mt-2"><span className="text-[#474747] font-bold text-base">Email:</span> {job.contact_information.email}</p>
                            <p className="text-[#474747] font-medium text-base mt-2"><span className="text-[#474747] font-bold text-base">Address:</span> {job.contact_information.address}</p>
                        </div>
                     </div>
                        <button onClick={handleApplyJob} className="btn-primary relative lg:top-[72px] w-full">Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;