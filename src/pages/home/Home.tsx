import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/useRedux";
import homeStyle from "./styles.module.css";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const [chosenQuestion, setQuestion] = useState<string>("");
  const navigate = useNavigate();
  const authorization = useAppSelector((state) => state.auth.authorization);

  const handleChooseQuestion = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    if (chosenQuestion !== event.currentTarget.value) {
      setQuestion(event.currentTarget.value);
    }
    else {
      setQuestion("");
    }
    
  };

  return (
    <>
      <div className={homeStyle.banner}>
        <h2 className={homeStyle.title}>
          Unlimited movies, TV shows, and more
        </h2>
        <h3 className={homeStyle.subtitle}>
          Ready to watch? Click here and let`s go!
        </h3>
        {!authorization ? (
          <button
            className={homeStyle.banner_button}
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        ) : (
          <button
            className={homeStyle.banner_button}
            onClick={() => navigate("/movies")}
          >
            Get started!
          </button>
        )}
      </div>
      <div>
        <h3 className={homeStyle.question_list_title}>Frequently Asked Questions</h3>
        <div className={homeStyle.question_list}>
          <div className={homeStyle.question}>
            <label className={homeStyle.question_title}>
              <span className={homeStyle.question_title_text}>What is Netflix?</span>
              <svg className={homeStyle.question_title_icon}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Plus"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="white"
                ></path>
              </svg>
              <input
                className={homeStyle.question_radio}
                type="radio"
                name="questions"
                value="first"
                checked={chosenQuestion === "first" ? true : false}
                onClick={handleChooseQuestion}
              />
            </label>
            <div className={homeStyle.question_text}>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. 
You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </div>
          </div>
          <div className={homeStyle.question}>
            <label className={homeStyle.question_title}>
              <span className={homeStyle.question_title_text}>Where can I watch?</span>
              <svg className={homeStyle.question_title_icon}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Plus"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="white"
                ></path>
              </svg>
              <input
                className={homeStyle.question_radio}
                type="radio"
                name="questions"
                value="second"
                checked={chosenQuestion === "second" ? true : false}
                onClick={handleChooseQuestion}
              />
            </label>
            <div className={homeStyle.question_text}>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
          </div>
          <div className={homeStyle.question}>
            <label className={homeStyle.question_title}>
              <span className={homeStyle.question_title_text}>What can I watch on Netflix?</span>
              <svg className={homeStyle.question_title_icon}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Plus"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="white"
                ></path>
              </svg>
              <input
                className={homeStyle.question_radio}
                type="radio"
                name="questions"
                value="third"
                checked={chosenQuestion === "third" ? true : false}
                onClick={handleChooseQuestion}
              />
            </label>
            <div className={homeStyle.question_text}>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
          </div>
          <div className={homeStyle.question}>
            <label className={homeStyle.question_title}>
              <span className={homeStyle.question_title_text}>Is Netflix good for kids?</span>
              <svg className={homeStyle.question_title_icon}
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Plus"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                  fill="white"
                ></path>
              </svg>
              <input
                className={homeStyle.question_radio}
                type="radio"
                name="questions"
                value="fours"
                checked={chosenQuestion === "fours" ? true : false}
                onClick={handleChooseQuestion}
              />
            </label>
            <div className={homeStyle.question_text}>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don`t want kids to see.</div>
          </div>
        </div>
      </div>
    </>
  );
}
