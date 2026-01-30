import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users, Lightbulb, Award, Zap } from "lucide-react";

export default function Privacy() {
    return (
        <>
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
                Privacy policy:
            </h2>
            <div className="mx-auto max-w-3xl">
                <ul>
                    <li>
                        1. Controller, Contact. The data controller
                        is [legal name] (d/b/a [dba]), located at
                        [address]. Send privacy inquiries and requests
                        for access, correction, or deletion to [contact
                        email].

                    </li>
                    <li>
                        2. Categories of Personal Data Collected. The
                        company collects names, email addresses, telephone
                        numbers, payment information, client materials,
                        website usage data, and any additional data
                        requested by third-party services (collectively,
                        “Personal Data”).

                    </li>
                    <li>
                        3. Sources and Means of Collection. Personal
                        Data is collected through contracts, online
                        and paper forms, payment processing, website
                        interactions, and third-party processors engaged
                        under individual client contracts.

                    </li>
                    <li>
                        4. Purposes and Legal Basis. Personal Data is
                        processed for recordkeeping, following North
                        Carolina law, fulfilling orders, hosting,
                        analytics, support, and legal procedures. The
                        legal basis for processing is Client consent as
                        shown by signing the applicable contract.

                    </li>
                    <li>
                        5. Third-Party Processors and Disclosures. The
                        company will engage third-party processors as
                        needed; specific processors will be listed in
                        each contract. The company will share Personal
                        Data only with government authorities as required
                        by law, partner businesses that help provide
                        services, and third-party services involved
                        in performance.

                    </li>
                    <li>
                        6. Data Retention. Personal Data will be kept
                        for at least two years to meet regulatory and
                        contractual obligations, unless a longer period
                        is required by law.

                    </li>
                    <li>
                        7. International Transfers, Hosting. Data is
                        hosted in North Carolina and is not transferred
                        internationally without an explicit contractual
                        agreement.

                    </li>
                    <li>
                        8. Minors. The company does not knowingly collect
                        Personal Data from children under thirteen
                        years old.

                    </li>
                    <li>
                        9. Security. Security measures will be implemented
                        as needed based on the contract. The company uses
                        administrative, technical, and physical safeguards
                        appropriate for the sensitivity of the data.

                    </li>
                    <li>
                        10. Rights and Requests. Individuals may request
                        access, correction, or deletion by emailing
                        [proper email]. The company will respond and
                        discuss available options with a representative.

                    </li>
                    <li>
                        11. Changes. The company may update this
                        Policy. Major changes will be posted and will
                        take effect as detailed here.

                    </li>
                    <li>
                        12. Governing Law. This Policy is governed by
                        the laws of North Carolina.

                    </li>
                </ul>
                <div>
                    <h3>Breach Notification</h3>
                    The company recognizes its responsibility to inform
                    individuals after detecting a security breach
                    according to North Carolina law. It will provide
                    notice without unreasonable delay, considering law
                    enforcement needs and any necessary remediation
                    efforts.


                    <h3>Cookie Notice</h3>
                    <ul>
                        <li><span style={{fontWeight: 'bold'}}>Cookies and Tracking</span>: The company and its third-party processors may use cookies and similar technologies. Types and durations of cookies will be specified in each contract (e.g., essential, analytics, marketing). When required, the company will obtain consent before placing non-essential cookies.</li>
                        <li><span style={{fontWeight: 'bold'}}>Managing Cookies</span>: Users can manage cookie preferences through the consent banner or browser settings. Disabling certain cookies may impact site functionality.</li>
                    </ul>

                    <h3>Breach Response Checklist</h3>
                    <ul>
                        <li><span style={{fontWeight: 'bold'}}>Immediate Containment</span>: After discovery, the CEO must quickly isolate affected systems and preserve evidence. </li>

                        <li><span style={{fontWeight: 'bold'}}>Preliminary Assessment</span>: Within 72 hours, determine the scope, types of data involved, and the likelihood of misuse.</li>

                        <li><span style={{fontWeight: 'bold'}}>Law Enforcement Liaison</span>: If law enforcement needs to be notified, coordinate and delay public notice as requested by authorities.</li>

                        <li><span style={{fontWeight: 'bold'}}>Notification Decision</span>: If there is unauthorized access to unencrypted personal information or if it is likely, prepare individual notices without unreasonable delay, following G.S. §75-65 and NC DOJ guidelines.</li>

                        <li><span style={{fontWeight: 'bold'}}>Regulatory Filing</span>: File any necessary state notifications and keep a written log of the incident.</li>

                        <li><span style={{fontWeight: 'bold'}}>Remediation and Monitoring</span>: Implement corrective actions, notify affected individuals, and offer support as needed.</li>

                        <li><span style={{fontWeight: 'bold'}}>Post-Incident Review</span>: Create a written incident report and update security controls and policies.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}
