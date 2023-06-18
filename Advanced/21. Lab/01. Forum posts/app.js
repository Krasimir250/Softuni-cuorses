const list = document.getElementById("review-list");
const pushBtn = document.getElementById("publish-btn");

pushBtn.addEventListener("click", push);

function push() {
  const title = document.getElementById("post-title").value;
  const category = document.getElementById("post-category").value;
  const content = document.getElementById("post-content").value;

  // If have empty input
  if (title && category && content) {
    // Create html elements
    const li = document.createElement("li");
    const article = document.createElement("article");
    const h4 = document.createElement("h4");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");

    // Set value on the elements
    h4.textContent = title;
    p1.textContent = `Category: ${category}`;
    p2.textContent = `Content: ${content}`;

    btn1.textContent = "Edit";
    btn1.className = "action-btn edit";

    btn2.textContent = "Approve";
    btn2.className = "action-btn approve";

    li.className = "rpost";

    // Append the elements
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);

    li.appendChild(article);
    li.appendChild(btn2);
    li.appendChild(btn1);

    list.appendChild(li);

    // Empty the inputs
    document.getElementById("post-title").value = "";
    document.getElementById("post-category").value = "";
    document.getElementById("post-content").value = "";
  }
}

// Testing input
// const createPost = {
//   title: () => document.getElementById("post-title"),
//   category: () => document.getElementById("post-category"),
//   content: () => document.getElementById("post-content"),
//   addBtn: () => document.getElementById("publish-btn"),
//   approveBtns: () => document.querySelectorAll(".approve"),
//   publishedList: () => document.getElementById("published-list"),
// };

// createPost.title().value = "Exam completion";
// createPost.category().value = "Exam";
// createPost.content().value =
//   "On the 06.04.2022 there will be exam that includes this problem";

// createPost.addBtn().click();
// createPost.approveBtns()[0].click();

// const actualResult = createPost.publishedList().children.length;

// expect(actualResult).to.equal(
//   1,
//   "The post is not added successfully to uploaded section!"
// );
// expect(document.querySelector("#published-list>li").children.length).to.equal(
//   1,
//   "The buttons are not removed!"
// );
