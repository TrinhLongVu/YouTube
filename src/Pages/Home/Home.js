import classNames from "classnames/bind";
import ItemHomePage from "../../Layouts/component/ItemHomePage";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

const datas = [
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
  {
    image:
      "https://i.ytimg.com/vi/njPWSLtKvzM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjgjgy7I0M0IMz1160Jea7PUrjJQ",
    content: "Middle school players?? No way. Can you beat them?",
    icon: "https://yt3.ggpht.com/3vl4AKJDr9JVxS6li58Qe4lCqBrWSxU56g0-Nto96StvYQGgzzofWTqvKv69k-cvv_Ph042mOA=s48-c-k-c0x00ffffff-no-rj",
    channel: "Badminton Ham",
    view: "997,037 views ",
    date: "7 Nov 2022",
    Link: "/video",
  },
];

function PageHome() {
  return (
    <div className={cx("container")}>
      {datas.map((data, index) => {
        return <ItemHomePage key={index} data={data} />;
      })}
    </div>
  );
}

export default PageHome;
