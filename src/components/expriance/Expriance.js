import React from 'react'
import { useState } from 'react'
import styles from './Expriance.module.css'
import EXP from '../../images/exp.png'
import EXP_img from '../../images/exp.jpg'
const Expriance = () => {
  const [dialog, setDialog] = useState(false);
  const [imageSrc] = useState(EXP_img);
  return (
    <div className={styles.container}>
      <div className={styles.expr}>
     
          <img src ={EXP} alt='Expriance_img' />
          
        <div className={styles.exp_detail}>
          <h2>Expriance</h2>
          <fieldset>
          <legend>Information Network Security Administration (INSA)</legend>
          <h3>System security analyst supervisor -25/06/2021 – CURRENT</h3>
          <ul>
            
          <li>In collaboration with management, plans, organizes, leads, administers, and evaluates the projects and activities in System security analyst team</li>
          <li>Responds to high-priority and/or highly complex security incidents and helps troubleshoot and correct security-related problems</li>
          <li>Provides guidance on design, implementation, administration, and enforcement of information security controls to application systems and tools, including network security and monitoring, virus protection, and identity and access management</li>
          <li>Provides technical expertise and guidance of security control implementation, cyber analytics techniques</li>
          <li>Perform application security assessments and analysis on newly built and existing applications</li>
          <li>Following up work progress and providing support if needed</li>     
          <li>Compiling a report and presenting for the concerned party (final result and during work progress)</li>

          </ul>
          <h3>System Security Analyst 10/12/2018 – 24/06/2021 </h3>
          <ul>
          <li>Investigate security breaches and other cybersecurity incidents</li>
          <li>Risk identification, assessment and analysis</li>
          <li>Vulnerability assessment and Analysis</li>
          <li>Simulate attack environment to look for vulnerabilities in systems and Conduct penetration testing</li>
          <li>Server vulnerability analysis and exploitation (Exchange and apache)</li>
          <li>Develop scripts and tools to automate the scan and discovery of vulnerabilities</li>
          <li>Customizing existing and developing new exploits for the vulnerabilities</li>
          <li>Identifying and analyzing the bugs or error in software that cause security breaches</li> 
          <li>Application security testing like MS office, adobe reader, browsers etc</li>
          <li>Basic knowledge of security operations, incident analysis, incident handling, and vulnerability management or testing, system patching, log analysis, intrusion detection, or firewall administration</li>
          <li>Documenting findings and prepare a final report</li>
          <li>Presenting final report to concerned party </li>
          </ul>
          <h3>Junior Software Reverse Engineer 14/10/2017 – 09/12/2018 </h3>
          <ul>
          <li>Reversing applications or software to its source code format to analyze, customize and also ﬁnd out vulnerabilities</li>
          <li>Recreating an existing product by patching security mechanisms</li>
          <li>Reversing applications or software to understand program flow or structure and reassemble by modifying its code</li>
          <li>Documenting activities and prepare a final report</li>
          <li>Presenting final project to concerned party</li> 
          </ul>


          </fieldset>
          <fieldset>
          <legend>SKILLS</legend>
          <h3>TECHNICAL SKILLS AND TOOL KNOWLEDGE  </h3>
<ul>
  <li>Deferent programing languages (PHP, C++, Python, Java script, visual basic)</li>
  <li>Operating systems (Linux/Unix, kali Linux and windows)</li>
  <li>Reverse Engineering tools (IDA, windbg, Ghidra, OllyDBG and Immunity Debugger)</li>
  <li>Virtual environments (virtual box, VMware workstation, VMware esxi)</li>
  <li>Network security tools (Firewall, Virtual private network (VPN), Web security, Anti-malware software …etc)</li>
  <li>Penetration testing Tools (Kali Linux, Burp Suite, Wireshark, Nmap   ...etc.)</li>
  <li>Ethical hacking</li>
  <li>Quick to learn and adapt to the latest technologies.
</li>
</ul>
</fieldset> 
<fieldset>
          <legend>ADDITIONAL INFORMATION</legend>
        
<ul>
<li>Completion certificates</li>
<li>EC-Council Certified Ethical Hacker v11 (CEH) </li>
<li>(ISC) ² -Web penetration testing </li>
<li>Cisco Cybersecurity Essentials</li>
<li>Research methodology by the school of electrical and computer engineering, Addis Ababa university</li>
<li>Malware Analysis and antivirus detection mechanisms analysis and identifying bypassing techniques </li> 
<li>Website development</li>
<li>Computer hardware maintenance </li>

</ul>
</fieldset> 

<fieldset>
<legend>Expriance Letter  </legend>
        <p>Information Network Security Administration (INSA)</p>
       
        
          
          <button className={styles.popup_button} onClick={() => {setDialog(!dialog)}}>Show Expriance Letter</button>
          {dialog && (
            <div className={styles.dialog}>
              <div className={styles.dialog_content}>
                <h3>Expriance Letter </h3>
                <button className={styles.close_icon} onClick={() => {setDialog(!dialog)}}>&#10005;</button>
                <img className={styles.popup_image} src={imageSrc} alt="Popup_Image" />
              </div>
            </div>
          )}
          </fieldset>
        </div>
        
      </div>
   
    </div>
  )
}

export default Expriance