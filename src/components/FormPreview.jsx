export default function FormPreview() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto">
        <div className="w-full h-full bg-white px-12 py-5 shadow-md">
          <div className="flex items-start justify-between py-5">
            <div>
              <img src="/logoipsum.svg" alt="logo" className="w-[150px]" />
            </div>
            <div className="flex flex-col items-center justify-center mb-5">
              <h1 className="font-bold text-3xl">ABC School & College</h1>
              <p>Address: Bijoy Soroni, Begum Rokeya Avenue, Mirpur, Dhaka</p>
              <p>Contact: +88017123456789, Email: abc-school@example.com</p>
              <p>Web: www.schoolweb.com, Whatpapp: 017123456789</p>
            </div>
            <div>
              <img
                src="/avatar.png"
                alt="logo"
                className="w-[120px] h-[150px] border border-slate-500"
              />
            </div>
          </div>
          {/* header */}

          <hr />

          {/* date and application tracking id */}
          <div className="flex items-center justify-between my-5 font-semibold text-base">
            <p>
              Application Tracking ID:{" "}
              <span className="underline decoration-dotted">123456789</span>
            </p>
            <p>Date: 20/08/2024</p>
          </div>

          {/* application header */}
          <h2 className="font-semibold text-xl text-center underline decoration-double">
            Application for Admission
          </h2>

          {/* application body */}

          {/* persoanl info */}
          <h2 className="font-semibold mt-10 mb-3">1. Personal Informations</h2>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 flex flex-row gap-10 items-center px-5 py-1.5">
              <div className="w-1/4 font-medium">Applicant Name</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-12 flex flex-row gap-10 items-center px-5 py-1.5">
              <div className="w-1/4 font-medium">Father Name</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-12 flex flex-row gap-10 items-center px-5 py-1.5">
              <div className="w-1/4 font-medium">Mother Name</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Date of Birth</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} 15-11-1999
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">Religion</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} Islam
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Gender</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} Male
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">Blood Group</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} B (+ve)
              </div>
            </div>
          </div>

          {/* citizen info */}
          <h2 className="font-semibold mt-10 mb-3">
            2. Citizanship Informations
          </h2>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Student NID</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">
                St. Nationality
              </div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} Bangladeshi
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Father NID</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">Nationality</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} Bangladeshi
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Mother NID</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">Nationality</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} Bangladeshi
              </div>
            </div>
          </div>

          {/* address info */}
          <h2 className="font-semibold mt-10 mb-3">3. Address Informations</h2>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 flex flex-row gap-10 items-center px-5 py-1.5">
              <div className="w-1/4 font-medium">Present Address</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} 150 540 1909
              </div>
            </div>

            <div className="col-span-12 flex flex-row gap-10 items-center px-5 py-1.5">
              <div className="w-1/4 font-medium">Permanent Address</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} Permanent Adddress
              </div>
            </div>
          </div>

          {/* admission info */}
          <h2 className="font-semibold mt-10 mb-3">
            4. Admission Informations
          </h2>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Selected Class</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} 6th
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">Section</div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} A
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Group</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} Science
              </div>
            </div>
          </div>

          {/* contact information */}
          <h2 className="font-semibold mt-10 mb-3">5. Contact Informations</h2>
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Contact No</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} 6th
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center gap-3 px-5 py-1.5">
              <div className="font-medium whitespace-nowrap">
                Alternate Contact No
              </div>
              <div className="w-full border-b border-brand border-dotted">
                :{` `} A
              </div>
            </div>

            <div className="col-span-6 flex flex-row items-center px-5 py-1.5">
              <div className="w-1/2 font-medium">Email</div>
              <div className="w-1/2 border-b border-brand border-dotted">
                :{` `} Science
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-20">
            <div className="border-t border-black px-5 py-2.5">
              Student Signature
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
