import { useState } from "react";

const worksheets = [
  {
    id: 1,
    title: "Prefixes: Pre-, Re-, Sub-, and Mis-",
    instructions: "Each question contains a word with one of the prefixes. The word with the prefix is underlined in the question. Choose the best answer (A or B) for each.",
    questions: [
      { id: 1, text: "When you \u200Bprejudge\u200B a situation, you decide before you know all the facts.", options: ["A. before you know all the facts", "B. after you know all the facts"], answer: "A" },
      { id: 2, text: "We \u200Bpreheat\u200B the oven so it will be ready when we start cooking.", options: ["A. heat the oven after cooking", "B. heat the oven before cooking"], answer: "B" },
      { id: 3, text: "A movie trailer is a short \u200Bpreview\u200B of what will happen in the film.", options: ["A. a view of something after it happens", "B. a view of something before it happens"], answer: "B" },
      { id: 4, text: "The teacher handed out a \u200Bpretest\u200B to assess what students already knew.", options: ["A. a test taken before learning new material", "B. a test taken after learning new material"], answer: "A" },
      { id: 5, text: "To plan ahead, they created a \u200Bprearranged\u200B schedule for the school event.", options: ["A. arranged after the event", "B. arranged before the event"], answer: "B" },
      { id: 6, text: "We will \u200Brewrite\u200B the paragraph to fix the mistakes.", options: ["A. write it again", "B. write it for the first time"], answer: "A" },
      { id: 7, text: "The cat \u200Bregrew\u200B its lost fur after the illness.", options: ["A. grew again", "B. grew worse"], answer: "A" },
      { id: 8, text: "After the fight, they decided to \u200Bredo\u200B the project to improve it.", options: ["A. do it again", "B. do it once and stop"], answer: "A" },
      { id: 9, text: "The team \u200Brebuilt\u200B the model using new materials.", options: ["A. destroyed it", "B. built it again"], answer: "B" },
      { id: 10, text: "She \u200Brechecked\u200B her answers to make sure there were no mistakes.", options: ["A. checked again", "B. checked for the first time"], answer: "A" },
      { id: 11, text: "The \u200Bsubmarine\u200B traveled beneath the surface of the sea.", options: ["A. above", "B. below"], answer: "B" },
      { id: 12, text: "A \u200Bsubset\u200B of the group was chosen to test the new idea.", options: ["A. a larger part", "B. a smaller part"], answer: "B" },
      { id: 13, text: "The scientist noted \u200Bsubatomic\u200B particles in the experiment.", options: ["A. tiny particles below the atomic level", "B. large, visible particles"], answer: "A" },
      { id: 14, text: "He found a \u200Bsubpar\u200B effort from the team.", options: ["A. above average", "B. below average"], answer: "B" },
      { id: 15, text: "The medicine caused a \u200Bsubcutaneous\u200B rash.", options: ["A. a rash under the skin", "B. a rash on the skin"], answer: "A" },
      { id: 16, text: "If you \u200Bmisunderstand\u200B someone, you do not understand them correctly.", options: ["A. understand incorrectly", "B. understand correctly"], answer: "A" },
      { id: 17, text: "The title of the article was a \u200Bmisprint\u200B and changed the meaning of the sentence.", options: ["A. a printed error", "B. a correct print"], answer: "A" },
      { id: 18, text: "She \u200Bmistook\u200B the measuring cup for part of a toy set.", options: ["A. used it in the right way", "B. used it in the wrong way"], answer: "B" },
      { id: 19, text: "The plan was a \u200Bmisfire\u200B and failed to reach the goal.", options: ["A. fired correctly", "B. fired wrongly or failed"], answer: "B" },
      { id: 20, text: "The player made a \u200Bmisstep\u200B and tripped on the first play.", options: ["A. a correct step", "B. an incorrect step"], answer: "B" },
    ]
  },
  {
    id: 2,
    title: "Correlative Conjunctions",
    instructions: "Read the longer background for each sentence and choose the best correlative conjunction pair to complete the sentence. Select the best option (A or B) for each question.",
    questions: [
      { id: 1, text: "Urban agriculture is increasingly visible in cities across the United States. City dwellers are __________ producing crops __________ raising livestock.", options: ["A. not only . . . but also", "B. either . . . or"], answer: "A" },
      { id: 2, text: "The festival will feature a wide range of activities this year. The event will showcase __________ live music __________ craft stalls.", options: ["A. both . . . and", "B. neither . . . nor"], answer: "A" },
      { id: 3, text: "When planning the trip, you can choose to travel by train or by bus. You can __________ take the express train __________ the regular train to save time.", options: ["A. either . . . or", "B. not only . . . but also"], answer: "A" },
      { id: 4, text: "The library offers a rich collection of resources. The library provides __________ books __________ multimedia resources for study.", options: ["A. not only . . . but also", "B. either . . . or"], answer: "A" },
      { id: 5, text: "To complete the project on time, you must __________ finish all assignments __________ attend the required briefing.", options: ["A. not only . . . but also", "B. both . . . and"], answer: "A" },
      { id: 6, text: "The new policy aims to improve accessibility for communities. The plan seeks __________ affordable access __________ transparent oversight.", options: ["A. not only . . . but also", "B. neither . . . nor"], answer: "A" },
      { id: 7, text: "The coach emphasized two essential qualities: fitness and cooperation. The squad must demonstrate __________ endurance __________ teamwork.", options: ["A. both . . . and", "B. not only . . . but also"], answer: "A" },
      { id: 8, text: "The garden project will yield a variety of vegetables for the local community. The plan intends to grow __________ carrots __________ tomatoes.", options: ["A. either . . . or", "B. not only . . . but also"], answer: "B" },
      { id: 9, text: "During the orientation, volunteers should check in and out. Volunteers should __________ sign in __________ sign out.", options: ["A. not only . . . but also", "B. either . . . or"], answer: "A" },
      { id: 10, text: "The research report will require careful design and thorough analysis. The study demands __________ precise planning __________ rigorous testing.", options: ["A. not only . . . but also", "B. both . . . and"], answer: "A" },
      { id: 11, text: "The new customer service policy affects both clients and employees. The policy impacts __________ customers __________ employees.", options: ["A. neither . . . nor", "B. not only . . . but also"], answer: "B" },
      { id: 12, text: "To qualify for the internship, applicants must __________ meet the minimum requirements __________ demonstrate relevant skills.", options: ["A. either . . . or", "B. not only . . . but also"], answer: "A" },
      { id: 13, text: "We have two travel options: driving by car or taking the train. We can __________ go by car __________ take the train.", options: ["A. either . . . or", "B. not only . . . but also"], answer: "A" },
      { id: 14, text: "The award honors someone who shows courage and resilience. The recipient demonstrates __________ bravery __________ perseverance.", options: ["A. not only . . . but also", "B. both . . . and"], answer: "A" },
      { id: 15, text: "The presenter will __________ introduce __________ provide a live demonstration of the product.", options: ["A. not only . . . but also", "B. either . . . or"], answer: "A" },
      { id: 16, text: "To meet the deadline, the team can __________ work overtime __________ hire temporary staff.", options: ["A. either . . . or", "B. not only . . . but also"], answer: "A" },
      { id: 17, text: "The analysis covers __________ risks __________ benefits of the new policy.", options: ["A. not only . . . but also", "B. both . . . and"], answer: "A" },
      { id: 18, text: "The setup for the conference room includes __________ a projector __________ a whiteboard for notes.", options: ["A. either . . . or", "B. not only . . . but also"], answer: "A" },
      { id: 19, text: "When deciding on the proposal, the committee will __________ approve __________ reject it based on the evidence presented.", options: ["A. not only . . . but also", "B. either . . . or"], answer: "B" },
      { id: 20, text: "In planning the community garden initiative, the project team's decision will need to __________ coordinate partnerships __________ measure impact.", options: ["A. not only . . . but also", "B. either . . . or"], answer: "A" },
    ]
  },
  {
    id: 3,
    title: "Persuasive and Opinion Writing",
    instructions: "Each question presents two sentences. Choose which sentence reflects a persuasive or opinion stance, a claim, or evidence, as appropriate to the prompt.",
    questions: [
      { id: 1, text: "A school board is debating after-school program funding. Which sentence expresses a clear opinion about the value of the program?", options: ["A. The district sees a 12% increase in attendance during after-school activities this year.", "B. Many parents believe after-school programs improve student engagement and safety."], answer: "B" },
      { id: 2, text: "In a debate about school uniforms, which option presents a persuasive claim?", options: ["A. Uniforms can reduce peer pressure and bullying by minimizing visible socioeconomic differences.", "B. The school has a new policy requiring all students to wear uniforms on weekdays."], answer: "A" },
      { id: 3, text: "When comparing two community health campaigns, which sentence makes a subjective judgment?", options: ["A. Campaign A reported a 25% increase in vaccination appointments in three months.", "B. Campaign A appears more effective because it uses personal stories that resonate with residents."], answer: "B" },
      { id: 4, text: "A teacher asks students to defend their position on homework load. Which sentence best states a persuasive claim?", options: ["A. Homework assignments should be reduced to two days a week to improve family time.", "B. The science behind sleep suggests students perform better with fewer nightly assignments."], answer: "A" },
      { id: 5, text: "In an editorial about city parks, which sentence argues a policy change?", options: ["A. The city plans to install more benches in the main park this year.", "B. Expanding park hours and programming will boost neighborhood health, safety, and community pride."], answer: "B" },
      { id: 6, text: "During a class discussion on school lunches, which sentence presents an opinion rather than a fact?", options: ["A. The cafeteria serves pizza every Thursday.", "B. Nutritious, affordable meals are essential for all students and should be a higher priority."], answer: "B" },
      { id: 7, text: "In a persuasive paragraph about renewable energy, which sentence is a strong claim?", options: ["A. Solar panels were installed on several school buildings last year.", "B. Utilizing renewable energy reduces pollution, saves money over time, and strengthens energy independence."], answer: "B" },
      { id: 8, text: "When evaluating a persuasive letter about recycling, which sentence expresses evidence?", options: ["A. Recycling helps conserve resources for future generations.", "B. Our town recycles 40% of its waste, which is higher than last year."], answer: "B" },
      { id: 9, text: "In an opinion piece about remote learning, which sentence conveys a personal stance?", options: ["A. Remote learning can be effective with the right supports and structure.", "B. The district has implemented new policies this semester."], answer: "A" },
      { id: 10, text: "A student is comparing two sports programs. Which sentence holds a persuasive argument?", options: ["A. Program X requires correct technique and offers challenging workouts.", "B. Program X helps students stay active and builds teamwork, which many families value."], answer: "B" },
      { id: 11, text: "In an essay about animal testing, which sentence presents a position?", options: ["A. The trial results show significant improvements in medical treatments.", "B. I believe animal testing should be replaced with humane, alternative methods whenever possible."], answer: "B" },
      { id: 12, text: "During a discussion about school start times, which sentence states a claim about outcomes?", options: ["A. Delaying start times by 30 minutes aligns with teen sleep research.", "B. The bus arrives at 7:15 a.m. every day."], answer: "A" },
      { id: 13, text: "In a persuasive brief about community gardens, which sentence argues for funding?", options: ["A. The garden will provide fresh produce to families in need.", "B. Funding is essential because community gardens create jobs, teach kids about nutrition, and improve local ecosystems."], answer: "B" },
      { id: 14, text: "In an opinion column about transportation options, which sentence expresses a preference?", options: ["A. The city should expand the bike lane network to reduce traffic.", "B. The council approved funding for road repairs last month."], answer: "A" },
      { id: 15, text: "When evaluating a public health campaign, which sentence offers a claim supported by reasoning?", options: ["A. The campaign should prioritize messages that address barriers to vaccination, such as access and misinformation.", "B. The campaign includes posters, flyers, and social media ads."], answer: "A" },
      { id: 16, text: "In a discussion about school testing, which sentence presents a persuasive stance?", options: ["A. Standardized tests can provide useful data on student progress.", "B. Reducing test frequency would free up time for creative projects and deeper learning."], answer: "B" },
      { id: 17, text: "In an essay about community involvement, which sentence asserts a value-laden claim?", options: ["A. Volunteers logged over 1,000 hours in the last quarter.", "B. Civic participation strengthens neighborhoods and should be encouraged through school programs."], answer: "B" },
      { id: 18, text: "During a debate about digital privacy, which sentence communicates a normative position?", options: ["A. The app collects user data to improve recommendations.", "B. People have a right to privacy, and companies should minimize data collection."], answer: "B" },
      { id: 19, text: "In a persuasive note about healthy snacks in schools, which sentence makes a recommendation?", options: ["A. The cafeteria offers fruit and yogurt as daily options.", "B. Schools should replace sugary snacks with fruit, nuts, and water to support student health."], answer: "B" },
      { id: 20, text: "In a paragraph about community safety, which sentence argues for a policy change?", options: ["A. The police department completed a crime statistics report for the last year.", "B. Increasing nighttime lighting and community policing initiatives will likely reduce crime and improve residents' sense of safety."], answer: "B" },
    ]
  },
  {
    id: 4,
    title: "Main Idea – 10 Passages",
    instructions: "Read each short passage. After reading, choose the option that best states the main idea of that passage. Each question has three choices (A, B, or C).",
    questions: [
      { id: 1, text: "Last Friday, Ms. Rivera's class visited the town's community garden. Students walked between rows of lettuce, tomatoes, and herbs, noting how the beds were built and watered. The gardener explained composting and how kitchen scraps become rich soil. Back in class, students kept notebooks, recording which plants grew best with the sun on the east side and which needed extra mulch on cooler days. They compared their observations with last year's garden data and discussed how insects helped pollinate flowers. The overall project aimed to teach responsibility, patience, and teamwork as everyone contributed to the garden's success. By the end of the week, the class harvested lettuce for a local food pantry and shared photographs with classmates who helped plant the seeds. The project showed how a small outdoor classroom can connect science, community service, and daily life.\n\nWhat is the main idea of this passage?", options: ["A. The class harvested lettuce for a food pantry.", "B. The garden project teaches science skills and teamwork in a community setting.", "C. The gardener explained composting to the students."], answer: "B" },
      { id: 2, text: "Two weeks ago, the library added a new "Reading Buddies" program. Fifth graders were paired with younger students to encourage reading aloud and discuss stories. Each week, buddies meet in a quiet corner with a shelf of popular chapter books. The older students practice listening, asking questions, and suggesting ideas while the younger ones gain confidence. The program also uses short graphic novels to help struggling readers enjoy stories without frustration. Librarians monitor progress, provide feedback, and celebrate improvements with small certificates. Teachers report that the program increases classroom engagement and helps students see themselves as responsible mentors.\n\nWhat is the main idea of this passage?", options: ["A. Younger students must read aloud with older buddies every day.", "B. The Reading Buddies program helps older students mentor younger readers and builds confidence.", "C. The library hosts graphic novels for all readers."], answer: "B" },
      { id: 3, text: "A neighborhood recycling drive brought families together on a sunny Saturday. Volunteers sorted plastic, paper, and aluminum while explaining why each material matters for the environment. Children practiced lifting boxes carefully, labeling bags, and keeping walkways clear. The organizers set up a booth with tips on reducing waste at home and showed simple DIY crafts from recycled materials. By noon, a small crowd had formed around a map that tracked the community's progress over the past year. The event highlighted how local actions, even small ones, can protect rivers and parks for future generations.\n\nWhat is the main idea of this passage?", options: ["A. The recycling drive taught kids how to sort materials and share eco-friendly tips.", "B. The event sold crafts made from recycled materials.", "C. The community map tracked river pollution levels."], answer: "A" },
      { id: 4, text: "During the science fair, a group of students tested whether sunlight or shade affected plant growth. They planted identical seeds in two labeled pots and kept careful notes about germination times, height, and leaf color. Students measured soil moisture, temperature, and the amount of daily sunlight each plant received. They compared their data with a control plant kept at balanced light. After weeks of observation, they created a simple graph showing which conditions produced the tallest plants. The project taught how to design fair tests, record data, and draw conclusions from evidence.\n\nWhat is the main idea of this passage?", options: ["A. The science fair showcased a graph about plant heights.", "B. The experiment demonstrates how to conduct a fair test and analyze results.", "C. The students watered the plants every day."], answer: "B" },
      { id: 5, text: "A city park was chosen for a two-day restoration project. Volunteers removed invasive weeds, planted native grasses, and painted picnic benches to look inviting. A local ranger provided information about wildlife habitat and why native plants are important for bees and birds. After breaks, groups discussed how to maintain the park, track visitor numbers, and report any problems. The overall effort not only improved beauty and usability but also increased community pride and awareness of local ecosystems.\n\nWhat is the main idea of this passage?", options: ["A. The park restoration improved both appearance and awareness of local ecosystems.", "B. Rangers gave talks about wildlife in the park.", "C. Volunteers painted benches and removed weeds."], answer: "A" },
      { id: 6, text: "A robotics club built a small line-following robot for the regional competition. Students brainstormed ideas, drafted a plan, and assigned roles for coding, wiring, and testing. They used basic sensors to detect the line and programmed the robot to correct its path. Several tests revealed timing issues, so the team adjusted the code and hardware. They documented every change in a project notebook, discussed challenges openly, and supported each other through setbacks. The experience emphasized collaboration, problem-solving, and perseverance.\n\nWhat is the main idea of this passage?", options: ["A. The team won the regional robotics competition.", "B. The robotics project focuses on teamwork and solving problems to improve the robot.", "C. The club met weekly to code online."], answer: "B" },
      { id: 7, text: "A school garden club organized a seed swap to encourage students to reuse and share. Families donated seeds saved from last year, and club members created simple seed starter kits with soil and small cups. The swap included a station with tips on proper planting, watering, and spacing. Attendees learned that saving seeds helps reduce costs and supports biodiversity. The event also promoted friendly competition by awarding small prizes for the most unusual seed variety.\n\nWhat is the main idea of this passage?", options: ["A. The seed swap helps families reuse seeds and promotes biodiversity.", "B. The garden club awarded prizes for seed varieties.", "C. Seeds were sold to raise funds for the club."], answer: "A" },
      { id: 8, text: "A reading club explored different viewpoints on a local issue: preserving a historic mill versus building a new community center. Members read articles, listened to a guest speaker, and debated with civility. They practiced identifying facts, opinions, and persuasive language in the texts. Although opinions varied, participants agreed that listening carefully is essential to understanding complex problems. The session ended with a plan to write letters to the town council expressing thoughtful positions.\n\nWhat is the main idea of this passage?", options: ["A. The group practiced civility while debating a local issue and considered multiple viewpoints.", "B. The town council will decide to build a new community center.", "C. The historic mill must be preserved at all costs."], answer: "A" },
      { id: 9, text: "A science notebook project asked students to describe weather patterns over a month. They recorded daily temperature, precipitation, and wind speed, then looked for patterns. The teacher helped them connect weather changes to larger climate trends, using simple graphs to illustrate increased rainfall during certain weeks. Students discussed how weather affects daily life, from clothing choices to outdoor activities. The activity showed that careful observation can reveal reliable information.\n\nWhat is the main idea of this passage?", options: ["A. Weather patterns can be observed and recorded to understand climate trends.", "B. The class wore weather-appropriate clothing every day.", "C. The teacher taught about different types of precipitation."], answer: "A" },
      { id: 10, text: "A geography club researched the rivers that flow near their town. They traced watersheds, measured water quality with simple test strips, and interviewed local anglers about fishing conditions. The club members compiled a map showing sources, pollution risks, and safe access points for recreation. They presented their findings at a school assembly, emphasizing how students can monitor and protect local waterways. The project connected science to community involvement.\n\nWhat is the main idea of this passage?", options: ["A. The geography club created a map of local rivers and discussed protection measures.", "B. The town has several good fishing spots.", "C. The students tested water quality with professional equipment."], answer: "A" },
    ]
  }
];

const Logo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="48" height="48" rx="12" fill="#1a3a5c"/>
    <text x="24" y="20" textAnchor="middle" fill="#f0c040" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">EVA</text>
    <text x="24" y="32" textAnchor="middle" fill="#7ec8e3" fontSize="11" fontWeight="700" fontFamily="Georgia, serif">IVY</text>
    <rect x="10" y="34" width="28" height="2" rx="1" fill="#f0c040"/>
  </svg>
);

export default function App() {
  const [screen, setScreen] = useState("home");
  const [activeWs, setActiveWs] = useState(null);
  const [answers, setAnswers] = useState({});
  const [revealed, setRevealed] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const startWorksheet = (ws) => {
    setActiveWs(ws);
    setAnswers({});
    setRevealed({});
    setSubmitted(false);
    setScreen("worksheet");
  };

  const selectAnswer = (qid, opt) => {
    if (submitted) return;
    const letter = opt.charAt(0);
    const correct = activeWs.questions.find(q => q.id === qid).answer;
    setAnswers(prev => ({ ...prev, [qid]: letter }));
    if (letter !== correct) {
      setRevealed(prev => ({ ...prev, [qid]: true }));
    } else {
      setRevealed(prev => ({ ...prev, [qid]: false }));
    }
  };

  const handleSubmit = () => setSubmitted(true);

  const score = activeWs
    ? activeWs.questions.filter(q => answers[q.id] === q.answer).length
    : 0;
  const total = activeWs ? activeWs.questions.length : 0;
  const allAnswered = activeWs ? activeWs.questions.every(q => answers[q.id]) : false;

  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  const wsColors = ["#1a3a5c","#2d6a4f","#7b2d8b","#b5451b"];
  const wsBg = ["#e8f0f8","#e8f5ef","#f5e8fa","#fdf0e8"];

  if (screen === "home") {
    return (
      <div style={{minHeight:"100vh", background:"linear-gradient(135deg,#0d2137 0%,#1a3a5c 60%,#0a4a6e 100%)", fontFamily:"Georgia, 'Times New Roman', serif", padding:"0 0 3rem"}}>
        <div style={{maxWidth:680, margin:"0 auto", padding:"2.5rem 1.5rem 0"}}>
          <div style={{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"0.5rem"}}>
            <Logo/>
            <div>
              <div style={{color:"#f0c040",fontSize:"0.75rem",letterSpacing:"0.18em",fontWeight:700,textTransform:"uppercase",marginBottom:"0.15rem"}}>Eva Ivy</div>
              <div style={{color:"#fff",fontSize:"1.5rem",fontWeight:700,lineHeight:1.1}}>English Homework Series</div>
            </div>
          </div>
          <p style={{color:"#7ec8e3",fontSize:"0.95rem",marginTop:"0.5rem",marginBottom:"2.5rem",fontStyle:"italic"}}>Choose a worksheet to begin</p>

          <div style={{display:"grid",gap:"1rem"}}>
            {worksheets.map((ws,i) => (
              <button key={ws.id} onClick={() => startWorksheet(ws)} style={{
                background:"rgba(255,255,255,0.06)",
                border:"1.5px solid rgba(255,255,255,0.15)",
                borderRadius:14,
                padding:"1.25rem 1.5rem",
                textAlign:"left",
                cursor:"pointer",
                transition:"all 0.18s",
                display:"flex",
                alignItems:"center",
                gap:"1rem",
                color:"#fff"
              }}
              onMouseEnter={e=>{e.currentTarget.style.background="rgba(255,255,255,0.13)";e.currentTarget.style.borderColor="rgba(240,192,64,0.5)";}}
              onMouseLeave={e=>{e.currentTarget.style.background="rgba(255,255,255,0.06)";e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";}}
              >
                <div style={{width:42,height:42,borderRadius:10,background:wsColors[i],display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:"1.1rem",color:"#fff",flexShrink:0}}>{ws.id}</div>
                <div>
                  <div style={{fontWeight:700,fontSize:"1rem",color:"#fff",marginBottom:2}}>{ws.title}</div>
                  <div style={{fontSize:"0.82rem",color:"#7ec8e3"}}>{ws.questions.length} question{ws.questions.length!==1?"s":""}</div>
                </div>
                <div style={{marginLeft:"auto",color:"#f0c040",fontSize:"1.2rem"}}>›</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (screen === "worksheet") {
    return (
      <div style={{minHeight:"100vh",background:"#f7f5f0",fontFamily:"Georgia,'Times New Roman',serif"}}>
        {/* Header */}
        <div style={{background:"#1a3a5c",padding:"0.9rem 1.5rem",display:"flex",alignItems:"center",gap:"0.75rem",position:"sticky",top:0,zIndex:10}}>
          <button onClick={()=>setScreen("home")} style={{background:"none",border:"none",color:"#7ec8e3",cursor:"pointer",fontSize:"1rem",padding:"0.25rem 0.5rem 0.25rem 0",display:"flex",alignItems:"center",gap:"4px"}}>‹ Back</button>
          <Logo/>
          <div style={{marginLeft:"0.25rem"}}>
            <div style={{color:"#f0c040",fontSize:"0.65rem",letterSpacing:"0.15em",fontWeight:700,textTransform:"uppercase"}}>Eva Ivy English</div>
            <div style={{color:"#fff",fontSize:"0.92rem",fontWeight:700}}>{activeWs.title}</div>
          </div>
        </div>

        <div style={{maxWidth:680,margin:"0 auto",padding:"1.5rem"}}>
          {/* Instructions */}
          <div style={{background:"#fff",border:"1.5px solid #d6cfc0",borderRadius:12,padding:"1rem 1.25rem",marginBottom:"1.5rem"}}>
            <div style={{color:"#1a3a5c",fontWeight:700,fontSize:"0.8rem",textTransform:"uppercase",letterSpacing:"0.12em",marginBottom:"0.35rem"}}>Instructions</div>
            <p style={{margin:0,color:"#3d3530",fontSize:"0.93rem",lineHeight:1.65}}>{activeWs.instructions}</p>
          </div>

          {/* Progress bar */}
          {!submitted && (
            <div style={{marginBottom:"1.25rem"}}>
              <div style={{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",color:"#6b6055",marginBottom:4}}>
                <span>Progress</span>
                <span>{Object.keys(answers).length} / {total} answered</span>
              </div>
              <div style={{height:6,background:"#e0dbd2",borderRadius:4,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${(Object.keys(answers).length/total)*100}%`,background:"#1a3a5c",borderRadius:4,transition:"width 0.3s"}}/>
              </div>
            </div>
          )}

          {/* Score banner */}
          {submitted && (
            <div style={{
              background: pct>=70?"#e8f5ef":"#fdf0e8",
              border:`2px solid ${pct>=70?"#2d6a4f":"#b5451b"}`,
              borderRadius:14,
              padding:"1.25rem 1.5rem",
              marginBottom:"1.5rem",
              textAlign:"center"
            }}>
              <div style={{fontSize:"2.5rem",fontWeight:700,color:pct>=70?"#2d6a4f":"#b5451b"}}>{score}/{total}</div>
              <div style={{fontSize:"1rem",color:pct>=70?"#2d6a4f":"#7b2d00",fontWeight:600}}>{pct}% — {pct>=90?"Excellent!":pct>=70?"Good work!":pct>=50?"Keep practicing!":"Review and try again!"}</div>
              <button onClick={()=>{setSubmitted(false);setAnswers({});setRevealed({});}} style={{marginTop:"0.85rem",background:"#1a3a5c",color:"#fff",border:"none",borderRadius:8,padding:"0.5rem 1.25rem",cursor:"pointer",fontFamily:"inherit",fontSize:"0.9rem"}}>Try Again</button>
            </div>
          )}

          {/* Questions */}
          {activeWs.questions.map((q, qi) => {
            const chosen = answers[q.id];
            const isCorrect = chosen === q.answer;
            const isWrong = chosen && !isCorrect;
            const showCorrect = revealed[q.id] || (submitted && isWrong);

            return (
              <div key={q.id} style={{
                background:"#fff",
                border: submitted
                  ? isCorrect ? "2px solid #2d6a4f" : chosen ? "2px solid #b5451b" : "1.5px solid #d6cfc0"
                  : "1.5px solid #d6cfc0",
                borderRadius:12,
                padding:"1.15rem 1.25rem",
                marginBottom:"1rem",
                transition:"border 0.2s"
              }}>
                {/* Question number + text */}
                <div style={{display:"flex",gap:"0.75rem",marginBottom:"0.85rem"}}>
                  <div style={{
                    width:28,height:28,borderRadius:"50%",
                    background: submitted ? (isCorrect?"#2d6a4f": chosen?"#b5451b":"#1a3a5c") : "#1a3a5c",
                    color:"#fff",
                    display:"flex",alignItems:"center",justifyContent:"center",
                    fontSize:"0.78rem",fontWeight:700,flexShrink:0,marginTop:2
                  }}>{qi+1}</div>
                  <div style={{color:"#1a1816",fontSize:"0.93rem",lineHeight:1.65,flex:1,whiteSpace:"pre-line"}}>{q.text}</div>
                </div>

                {/* Options */}
                <div style={{display:"flex",flexDirection:"column",gap:"0.5rem",paddingLeft:"2.5rem"}}>
                  {q.options.map(opt => {
                    const letter = opt.charAt(0);
                    const isChosen = chosen === letter;
                    const isAnswer = letter === q.answer;

                    let bg = "#f7f5f0";
                    let border = "1.5px solid #d6cfc0";
                    let color = "#2c2622";
                    let icon = null;

                    if (isChosen && !submitted) { bg="#e8f0f8"; border="1.5px solid #1a3a5c"; color="#1a3a5c"; }
                    if (submitted || (isChosen && isWrong)) {
                      if (isChosen && isCorrect) { bg="#e8f5ef"; border="2px solid #2d6a4f"; color="#1a3a25"; icon="✓"; }
                      else if (isChosen && !isCorrect) { bg="#fdf0e8"; border="2px solid #b5451b"; color="#7b2d00"; icon="✗"; }
                      else if (isAnswer && showCorrect) { bg="#fffbe8"; border="2px solid #c8a010"; color="#5a3c00"; icon="★"; }
                    }

                    return (
                      <button key={letter} onClick={() => selectAnswer(q.id, opt)}
                        disabled={!!chosen && !submitted}
                        style={{
                          background:bg,
                          border,
                          borderRadius:8,
                          padding:"0.6rem 0.9rem",
                          textAlign:"left",
                          cursor: chosen && !submitted ? "default" : submitted ? "default" : "pointer",
                          display:"flex",alignItems:"center",gap:"0.6rem",
                          fontFamily:"inherit",
                          fontSize:"0.88rem",
                          color,
                          fontWeight: isChosen||isAnswer?"600":"400",
                          transition:"all 0.15s"
                        }}>
                        <span style={{fontWeight:700,fontSize:"0.9rem",minWidth:18}}>{letter}.</span>
                        <span style={{flex:1}}>{opt.substring(3)}</span>
                        {icon && <span style={{fontSize:"1rem",marginLeft:4}}>{icon}</span>}
                      </button>
                    );
                  })}
                </div>

                {/* Correct answer reveal (immediate, when wrong) */}
                {showCorrect && !submitted && (
                  <div style={{marginTop:"0.65rem",paddingLeft:"2.5rem",display:"flex",alignItems:"center",gap:"0.5rem"}}>
                    <span style={{background:"#fffbe8",border:"1px solid #c8a010",borderRadius:6,padding:"0.3rem 0.75rem",fontSize:"0.82rem",color:"#5a3c00",fontWeight:600}}>
                      ★ Correct answer: {q.answer} — {q.options.find(o=>o.charAt(0)===q.answer).substring(3)}
                    </span>
                  </div>
                )}
              </div>
            );
          })}

          {/* Submit button */}
          {!submitted && (
            <div style={{textAlign:"center",marginTop:"1.25rem",paddingBottom:"2rem"}}>
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                style={{
                  background: allAnswered?"#1a3a5c":"#b0a898",
                  color:"#fff",
                  border:"none",
                  borderRadius:10,
                  padding:"0.8rem 2.5rem",
                  fontSize:"1rem",
                  fontWeight:700,
                  fontFamily:"inherit",
                  cursor: allAnswered?"pointer":"not-allowed",
                  letterSpacing:"0.04em"
                }}>
                Submit Worksheet
              </button>
              {!allAnswered && <p style={{color:"#9a8e82",fontSize:"0.82rem",marginTop:"0.5rem"}}>Answer all questions to submit</p>}
            </div>
          )}
          {submitted && (
            <div style={{textAlign:"center",paddingBottom:"2rem",marginTop:"0.5rem"}}>
              <button onClick={()=>setScreen("home")} style={{background:"none",border:"1.5px solid #1a3a5c",color:"#1a3a5c",borderRadius:10,padding:"0.7rem 1.75rem",fontSize:"0.95rem",fontFamily:"inherit",cursor:"pointer"}}>← Back to Worksheets</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
