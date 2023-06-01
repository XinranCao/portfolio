import React, { useState, useEffect } from "react";
import css from "./Project.module.scss";

const Project = ({ goBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div onClick={goBack} className={`secondaryText ${css.goBack}`}>
          ← &nbsp; Go back
        </div>
        <div className={css.content}>
          <img src="/dearborn/dearborn.png" alt="project" />
          <div className={css.heading}>
            <div className={`primaryText  ${css.proj_title}`}>
              Permitting Better Permitting
            </div>
            <div className={`secondaryText  ${css.sub_title}`}>
              Citizen Interaction Design - Permit Application Process
            </div>
          </div>
          <div className={css.basicInfo}>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>Team</span>
              <span> Sreelakshmi Surabiyil Bindu </span>
              <span> Xinran Cao </span>
              <span> Yian Gong </span>
              <span> Xilei Liu </span>
              <span> Orville Mo-He Emilia Schneider</span>
            </div>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>My Role</span>
              <span> UX Researcher </span>
              <span> UX Designer</span>
              <span>Report Writer </span>
            </div>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>
                Timeline
              </span>

              <span> Jan 2023 - Apr 2023</span>
            </div>
            <div className={css.infoSection}>
              <span className={`secondaryText  ${css.infoTitle}`}>
                Discipline
              </span>
              <span> User Research </span>
              <span> Citizen Interaction Design </span>
              <span> UI/UX Design </span>
              <span> Prototyping Usability Testing </span>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Overview</span>
            <div
              className={`${css.section_content} ${css.horizontal}`}
              id={css.overview}
            >
              <div className={css.section_horizontal}>
                <div className={`secondaryText  ${css.infoTitle}`}>Client</div>
                <span>
                  The Economic Development Department of the City of Dearborn,
                  Michigan
                </span>
                <br />
                <p>
                  The Dearborn Economic Development Department is aiming to
                  streamline the permit application process by{" "}
                  <strong>digitizing</strong> it and collaborating with{" "}
                  <strong>Google</strong> to build a website. Our team has been
                  tasked with conducting user research and providing initial
                  solutions, which will serve as a foundation for the website
                  and permit application development process.
                </p>
              </div>
              <div className={css.section_horizontal}>
                <img
                  id={css.dac}
                  src="/dearborn/dac.webp"
                  alt="Dearborn Administrative Center"
                />
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Design Thinking Process</span>
            <div className={css.section_content}>
              <img
                src="/dearborn/design_thinking.png"
                alt="Design Thinking Process"
              />
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Empathize</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div id={css.client_meeting}>
                <div id={css.client_meeting_pt1}>
                  <div className={css.section_horizontal}>
                    <div className={`secondaryText  ${css.infoTitle}`}>
                      Client Meeting
                    </div>
                    <p>
                      Our team held weekly online meetings, as well as several
                      face-to-face discussions at the Dearborn Administrative
                      Center (DAC) with department staff and the director.
                      During our first encounter, we familiarized ourselves with
                      the various departments and different types of permit
                      application procedures.
                    </p>
                    <p>
                      In subsequent meetings, we delved deeper, gaining a
                      thorough understanding of the permit application process.
                      Following discussion, our team and the client mutually
                      agreed to concentrate on designing the application
                      processes for two specific permits. This design will be
                      &nbsp;
                      <strong>flexible</strong>&nbsp; and &nbsp;
                      <strong>can be applied</strong>&nbsp; to other more
                      complex permit applications in the future.
                    </p>
                  </div>
                  <div className={css.section_horizontal}>
                    <img
                      id={css.dac}
                      src="/dearborn/client_meeting.png"
                      alt="Client Meeting"
                    />
                  </div>
                </div>
                <div id={css.client_meeting_pt2}>
                  <div className={css.section_horizontal}>
                    <a
                      href="/public/dearborn/current_workflow.png"
                      target="_blank"
                    >
                      <img
                        id={css.curr_wf}
                        src="/dearborn/current_workflow.png"
                        alt="Current Workflow"
                      />
                    </a>
                  </div>
                  <div className={css.section_horizontal}>
                    <div>The two permit applications we chose are:</div>
                    <p>
                      <strong>Electrical Permit</strong>
                      &nbsp;- The Electrical Permit stands out for its
                      straightforward application process, acting as a basic
                      module.
                    </p>
                    <p>
                      <strong>
                        Commercial Renovation Permit (Non-trade permit)
                      </strong>
                      &nbsp; - This permit application involves a review
                      process, a feature shared with numerous more complex
                      applications. While it does introduce some complexity, it
                      remains manageable and is not overly intricate.
                    </p>
                    <p>
                      Then, we learned the current workflow associated with
                      these two permit application processes and illustrated a
                      workflow diagram for clarity and better understanding.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Interview
                </div>
                <p className={css.note}>
                  Note: Initially, our plan was to recruit both individual
                  homeowners and contractors for our interviews. However, upon
                  discovering that homeowners are typically mandated to hire
                  licensed professionals for electrical or commercial renovation
                  tasks, we shifted our focus solely to contractors.
                  Consequently, we targeted contractors who had experience
                  applying for various types of permits.
                </p>
                <p>
                  To comprehend the challenges, needs, and expectations users
                  have when applying for permits in Dearborn, and to compare
                  this process with that in other cities, we conducted &nbsp;
                  <strong>6 interviews</strong>&nbsp; with &nbsp;
                  <strong>applicants</strong> in Dearborn and &nbsp;
                  <strong>1 interview</strong>&nbsp; with a &nbsp;
                  <strong>City of Ann Arbor official</strong>.
                </p>
              </div>
              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>Persona</div>
                <p>
                  Based on the current workflows and interviews, we created
                  &nbsp;<strong>2 user personas</strong> to emphasize the user
                  experience in their context.
                </p>
                <div className={css.photos}>
                  <a href="/public/dearborn/persona1.png" target="_blank">
                    <img
                      id={css.curr_wf}
                      src="/dearborn/persona1.png"
                      alt="User Persona"
                    />
                  </a>
                  <a href="/public/dearborn/persona2.png" target="_blank">
                    <img
                      id={css.curr_wf}
                      src="/dearborn/persona2.png"
                      alt="User Persona"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Define</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div className={css.vertical}>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Affinity Diagram
                </div>
                <div id={css.affnity_diagram}>
                  <a
                    href="/public/dearborn/dearborn_affinity.png"
                    target="_blank"
                  >
                    <img
                      src="/dearborn/dearborn_affinity.png"
                      alt="Affinity Diagram"
                    />
                  </a>
                  <p>
                    Based on the notes we collected during the interviews, we
                    created an affinity diagram to summarize our findings. By
                    analyzing the affinity diagram, we identified 5 key
                    insights:
                    <br /> <br />
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Application Submission:</strong>&nbsp;
                        Applicants would prefer an online approach to the permit
                        application process.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong>Communication Breakdowns:</strong>&nbsp;
                        Communication between city and applicant is inconsistent
                        and not frequent enough.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong>Information Access:</strong>&nbsp;Project
                        stakeholders who are not the applicant need access to
                        the information shared between the city and the
                        applicant.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong>Inspection Scheduling & Result:</strong>
                        &nbsp; Applicants would prefer an online approach to the
                        permit application process.
                      </p>
                    </li>

                    <li>
                      <p>
                        <strong>Long Process & lack of Timeline:</strong>
                        &nbsp; Applicants are frustrated about long wait times
                        and the application review process timeline not being
                        communicated.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={css.vertical}>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Define User Needs
                </div>
                <div>
                  <p>
                    Then, we determined 5 main user needs for the permit
                    application process:
                  </p>

                  <p>
                    <strong>
                      1. Clear and efficient instruction on required materials
                      and process for permit application
                    </strong>
                  </p>

                  <p>
                    <strong>
                      2. Submitting a permit application is straightforward with
                      an easy-to-follow process
                    </strong>
                  </p>

                  <p>
                    <strong>
                      3. Synchronized information update to all stakeholders
                    </strong>
                  </p>

                  <p>
                    <strong>
                      4. Frequent and instant communication between applicants
                      and staff
                    </strong>
                  </p>

                  <p>
                    <strong>
                      5. Tracking and retrieving application status and history
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Ideate</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div className={css.vertical} id={css.brainstorming}>
                <div className={css.section_horizontal}>
                  <div className={`secondaryText  ${css.infoTitle}`}>
                    Brainstorming
                  </div>
                  <div>
                    <p>
                      Through multiple brainstorming sessions, our team
                      identified 5 solutions addressing the 5 primary user
                      needs:
                    </p>

                    <p>
                      <strong>
                        1. Redesign the government website with clearer content
                        and information architecture
                      </strong>
                    </p>

                    <p>
                      <strong>
                        2. Design permit application portal with a step-by-step
                        permit application process
                      </strong>
                    </p>

                    <p>
                      <strong>
                        3. All stakeholders should be added as contacts and will
                        be updated with any feedback
                      </strong>
                    </p>

                    <p>
                      <strong>
                        4. Allow applicants to check and reply to feedback from
                        staff and other stakeholders in permit portal
                      </strong>
                    </p>

                    <p>
                      <strong>
                        5. Allow applicants to check application status and more
                        detailed information in permit portal
                      </strong>
                    </p>
                  </div>
                </div>
                <div className={css.section_horizontal}>
                  <img src="/dearborn/brainstorming.png" alt="Brainstorming" />
                </div>
              </div>

              <div className={css.vertical}>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  User Flow
                </div>
                <div id={css.user_flow}>
                  <p>
                    And we proposed new workflows for information-gathering,
                    application submission, and status update & feedback
                  </p>
                  <a href="/public/dearborn/new_workflow.png" target="_blank">
                    <img src="/dearborn/new_workflow.png" alt="New Workflows" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Prototype</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div className={css.vertical}>
                <div id={css.lowfi_prototype}>
                  <p>
                    Our team developed wireframes and low-fidelity prototypes of
                    the restructured city&nbsp;
                    <strong>government website</strong>&nbsp;and a&nbsp;
                    <strong>new application portal</strong>&nbsp;based on our
                    proposed workflows
                  </p>
                  <a
                    href="https://www.figma.com/file/8vkRH0udvmTv6UdYsg7smy/prototype-permitting?type=design&node-id=1%3A3&t=04BkQYkO7gk4PW9t-1"
                    target="_blank"
                  >
                    <img
                      id={css.low_fi}
                      src="/dearborn/low_fi.png"
                      alt="Low Fidelity Prototype"
                    />
                  </a>
                  <p className={css.note}>
                    Note: We also interated the design process and created
                    Hi-Fidelity Prototype after usability testing. The Hi-Fi
                    Prototype is displayed in the&nbsp;
                    <a href="#iteration">
                      <strong>Iteration</strong>
                    </a>
                    &nbsp;section.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Test</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div className={css.vertical}>
                <div id={css.lowfi_prototype}>
                  <div className={`secondaryText  ${css.infoTitle}`}>
                    Usability testing
                  </div>
                  <p>
                    To ensure our solution effectively addresses user issues and
                    to uncover areas for improvement, we conducted seven
                    task-based usability tests. Our testing plan involved&nbsp;
                    <strong>7 main tasks</strong>
                    &nbsp;and an&nbsp;
                    <strong>A/B test</strong>
                    &nbsp;comparing two design versions of certain aspects of
                    our solutions.
                  </p>
                  <div className={css.photos}>
                    <a
                      href="/public/dearborn/usability_test1.png"
                      target="_blank"
                    >
                      <img
                        src="/dearborn/usability_test1.png"
                        alt="Usability Test Protocol"
                      />
                    </a>
                    <a
                      href="/public/dearborn/usability_test2.png"
                      target="_blank"
                    >
                      <img
                        src="/dearborn/usability_test2.png"
                        alt="Usability Test Protocol"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Iteration</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div className={css.vertical}>
                <div id={css.iterate_ideate}>
                  <div className={`secondaryText  ${css.infoTitle}`}>
                    Ideate
                  </div>
                  <p>
                    After usability testing, our team held several discussions
                    to address the issues identified during the tests as well as
                    to figure out which design version to keep.
                  </p>
                  <a
                    href="/public/dearborn/iteration_ideate.png"
                    target="_blank"
                  >
                    <img
                      src="/dearborn/iteration_ideate.png"
                      alt="Iteration Ideate"
                    />
                  </a>
                  <p>
                    Our team made series of modifications to our low-fidelity
                    prototypes and merged the two versions into one based on the
                    feedback gathered from usability testing.
                  </p>
                </div>
              </div>
              <div className={css.vertical}>
                <div id={css.iterate_prototype}>
                  <div className={`secondaryText  ${css.infoTitle}`}>
                    Hi-Fidelity Prototype
                  </div>
                  <p>
                    This iterative design process led to the creation of
                    high-fidelity prototypes based on the revisions.
                  </p>
                  <div className={css.hi_fi}>
                    <div className={css.hi_fi_title}>
                      City Government Website
                    </div>
                    <a
                      href="https://www.figma.com/file/8vkRH0udvmTv6UdYsg7smy/prototype-permitting?type=design&node-id=1%3A3960&t=fQRe1c7i4yZA16dW-1"
                      target="_blank"
                    >
                      <div className={css.product_showcase}>
                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/website_about.png"
                            alt="Website About Page"
                          />
                          <img
                            src="/dearborn/website_inspections.png"
                            alt="Website Inspection Page"
                          />
                        </div>
                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/website_apply_permits.png"
                            alt="Website Apply Permit Page"
                          />
                          <img
                            src="/dearborn/website_Faq.png"
                            alt="Website FAQ Page"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={css.hi_fi}>
                    <div className={css.hi_fi_title}>
                      Online Permit Application Portal
                    </div>
                    <a
                      href="https://www.figma.com/file/8vkRH0udvmTv6UdYsg7smy/prototype-permitting?type=design&node-id=1%3A3960&t=fQRe1c7i4yZA16dW-1"
                      target="_blank"
                    >
                      <div className={css.product_showcase}>
                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/portal_signup.png"
                            alt="Website About Page"
                          />
                          <img
                            src="/dearborn/portal_apply.png"
                            alt="Website Inspection Page"
                          />
                        </div>
                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/portal_home.png"
                            alt="Website Apply Permit Page"
                          />
                          <img
                            src="/dearborn/portal_account_page_permits.png"
                            alt="Website FAQ Page"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={css.hi_fi}>
                    <div className={css.hi_fi_title}>
                      Permit Application Process and Feedback
                    </div>
                    <a
                      href="https://www.figma.com/file/8vkRH0udvmTv6UdYsg7smy/prototype-permitting?type=design&node-id=1%3A3960&t=fQRe1c7i4yZA16dW-1"
                      target="_blank"
                    >
                      <div className={css.product_showcase}>
                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/application_process1.png"
                            alt="Application Process Address Page"
                          />
                          <img
                            src="/dearborn/application_process4.png"
                            alt="Application Process Permit Detail Page - Rejected"
                          />
                        </div>
                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/application_process2.png"
                            alt="Application Process Submitted Page"
                          />
                          <img
                            src="/dearborn/application_process5.png"
                            alt="Application Process Contacts Page"
                          />
                        </div>

                        <div className={css.showcase_col}>
                          <img
                            src="/dearborn/application_process3.png"
                            alt="Application Process Permit Type Page"
                          />
                          <img
                            src="/dearborn/application_process6.png"
                            alt="Application Process Permit Detail Page - Issued"
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className={css.hi_fi}>
                    <div className={css.hi_fi_title}>Live Demo</div>
                    <div className={css.figma_iframe}>
                      <iframe
                        width="100%"
                        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F8vkRH0udvmTv6UdYsg7smy%2Fprototype-permitting%3Fkind%3D%26node-id%3D1-5729%26page-id%3D1%253A3960%26scaling%3Dscale-down%26starting-point-node-id%3D1%253A6757%26viewport%3D710%252C343%252C0.07"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Exposition</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div className={css.vertical}>
                <img
                  style={{ marginTop: "2rem" }}
                  src="/dearborn/exposition.png"
                  alt="2023 Civic Tech Exposition"
                />
                <div id={css.exposition}>
                  <div className={css.section_horizontal}>
                    <p>
                      Upon completion of the project, our team was honored to be
                      invited to the&nbsp;
                      <strong>2023 Civic Tech Exposition</strong>&nbsp;in
                      Dearborn. We presented our work to&nbsp;
                      <strong>the city staff and the Mayor of Dearborn</strong>
                      .&nbsp; We designed an interactive display featuring both
                      physical drop-off boxes and digital devices. This was
                      intended to highlight the contrast between the existing
                      in-person permit application process and our novel online
                      system. We further demonstrated the unique aspects of our
                      design by offering visitors a hands-on experience.
                    </p>

                    <p>
                      Our works gained recognition from city staff and the
                      Mayor, who provided feedback and comments that we greatly
                      appreciated. (Full Score is 7)
                    </p>
                  </div>
                  <div className={css.section_horizontal}>
                    <img
                      style={{ marginTop: "2rem" }}
                      src="/dearborn/feedback.webp"
                      alt="Exposition Feedback"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={css.proj_section}>
            <span className={css.sectionTitle}>Limitations</span>
            <div className={`${css.section_content} ${css.vertical}`}>
              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Inspections
                </div>
                <p>
                  Because of time constraints, we were unable to develop a
                  workflow for scheduling inspections after permit is issued.
                  This is a crucial component for permit application, and we
                  would certainly focus on this aspect given more time.
                </p>
              </div>

              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Digitizing PDF forms
                </div>
                <p>
                  Our current design doesn't display the digital versions of the
                  permit application forms, a vital part of the ideal solution.
                  In our proposed solution, users should be able to fill out all
                  required details directly within the portal, rather than
                  having to download a PDF form, fill it out, and then upload it
                  as an attachment in the portal.
                </p>
              </div>

              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Specific permit application{" "}
                </div>
                <p>
                  Our current prototype design walks users through the
                  application process for an electrical permit. However, every
                  permit type is unique, requiring a distinct set of steps.
                  Given more time, we would definitely expand our design to
                  include more permit types, such as the commercial renovation
                  permit, by tailoring the application process according to each
                  specific workflow.
                </p>
              </div>

              <div>
                <div className={`secondaryText  ${css.infoTitle}`}>
                  Accessibility
                </div>
                <p>
                  Dearborn has a large population of Arabic community. Although
                  it is out of our scope, the inclusion of prominent local
                  languages in the design process, such as Arabic, is highly
                  important to ensure accessibility for all residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
