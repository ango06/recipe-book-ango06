/* import { useNavigate, useParams } from "react-router";
import PageNotFound from "./PageNotFound";

const validWeeks = [1, 2, 3, 4, 5];

const weekTitles = {
  1: "Git and GitHub",
  2: "Figma and Intro to HTML/CSS",
  3: "HTML/CSS Continued",
  4: "JavaScript",
  5: "Node.js, JSX, and React",
};

const homeworkInfo = {
  1: "Create your profile on Slack",
  2: "Complete the Brandon's Burritos Assignment",
  3: "Complete the HTML/CSS About Me Assignment",
  4: "Complete the JavaScript Assignment",
  5: "Complete the HTML/CSS React Assignment",
};

const BookPages = () => {
  const { number } = useParams();
  const navigate = useNavigate();
  const bootcampWeek = parseInt(number);

  const handlePrevious = () => {
    navigate(`/weeks/${bootcampWeek - 1}`);
  };

  const handleNext = () => {
    navigate(`/weeks/${bootcampWeek + 1}`);
  };

  // So /weeks/SDFLKJ or /weeks/-1 is not a valid page
  if (isNaN(bootcampWeek) || !validWeeks.includes(bootcampWeek)) {
    return <PageNotFound />;
  }

  return (
    <>
      <h1>
        Week {number}: {weekTitles[bootcampWeek]}
      </h1>
      <h2>Homework:</h2>
      <p>{homeworkInfo[bootcampWeek]}</p>
      <div className="flex justify-between w-1/2 m-10">
        <button onClick={handlePrevious} disabled={bootcampWeek === 1}>
          Previous Week
        </button>
        <button onClick={handleNext} disabled={bootcampWeek === 5}>
          Next Week
        </button>
      </div>
    </>
  );
};

export default BookPages;
*/

/*
import { Link } from "react-router";

const Weeks = () => {
  return (
    <>
      <h1>Weeks</h1>
      <p>Below are some of the weeks for bootcamp.</p>
      <ol>
        <li><Link to="/weeks/1">Week 1: Git and GitHub</Link></li>
        <li><Link to="/weeks/2">Week 2: Figma and Intro to HTML/CSS</Link></li>
        <li><Link to="/weeks/3">Week 3: HTML/CSS Continued</Link></li>
        <li><Link to="/weeks/4">Week 4: JavaScript</Link></li>
        <li><Link to="/weeks/5">Week 5: Node.js, JSX, and React</Link></li>
      </ol>
    </>
  );
}

export default Weeks;
*/