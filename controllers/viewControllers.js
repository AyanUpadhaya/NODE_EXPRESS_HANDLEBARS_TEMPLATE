//index or home view
const homeView = (req, res) => {
  const posts = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      author: "John Doe",
      content:
        "JavaScript is a versatile programming language used primarily for web development.",
      tags: ["JavaScript", "Programming", "Web Development"],
      createdAt: "2024-10-01T08:30:00Z",
      updatedAt: "2024-10-10T12:00:00Z",
    },
    {
      id: 2,
      title: "Understanding Asynchronous Programming",
      author: "Jane Smith",
      content:
        "Asynchronous programming is a method of programming that allows multiple tasks to run concurrently.",
      tags: ["Async", "JavaScript", "Programming"],
      createdAt: "2024-10-03T10:00:00Z",
      updatedAt: "2024-10-11T14:15:00Z",
    },
    {
      id: 3,
      title: "A Guide to RESTful APIs",
      author: "Chris Brown",
      content:
        "RESTful APIs are a way to structure web services using HTTP methods.",
      tags: ["API", "REST", "Web Services"],
      createdAt: "2024-10-05T16:20:00Z",
      updatedAt: "2024-10-12T18:45:00Z",
    },
    
  ];
  var fullUrl = req.originalUrl;
  res.render("home", {
    title: "Home",
    fullUrl: fullUrl,
    posts: posts,
  });
};

//about
const aboutView = (req, res) => {
  var fullUrl = req.originalUrl;
  res.render("about", {
    title: "About",
    fullUrl: fullUrl,
  });
};

//not found
const notFound =(req,res)=>{
  var fullUrl = req.originalUrl;
  res.render("notfound", {
    title: "notfound",
    fullUrl: fullUrl,
  });
}

module.exports = {
  homeView,
  aboutView,
  notFound,
};