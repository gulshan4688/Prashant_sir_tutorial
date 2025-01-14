import { Form, redirect } from "react-router-dom";

const CreatePost = (post) => {
  // const { addPost } = useContext(PostList);

  return (
    // we were using ref={userid } here but we change to <form> tag to <Form> and everything change inplace of ref we use name=""
    // and we dont need any onsubmit button it will automacticlly submit it and no need to define any extra method for e.preventDefault();
    <div className="createPost-container">
      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter Your user Id
          </label>
          <input
            type="text"
            name="userId"
            className="form-control"
            id="userId"
            placeholder="Your User Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..!"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            rows={4}
            name="body"
            type="text"
            className="form-control"
            id="title"
            placeholder="The description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            name="reactions"
            className="form-control"
            id="reactions"
            placeholder="How many people have reacted to this post"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="tags"
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Enter Your tags with spaces"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </div>
  );
};
export async function createPostAction(data) {
  const formData = await data.request.formData();
  // upar jo form data hai wo bahut complex data hai jisse hum log ko data nikalna padta hai
  //uske liye humlog ye object.formentries use krte hai wo sara data postData mei nikal ke aa jata hai
  const postData = Object.fromEntries(formData);
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // iske andar wo data hai jo server pe humlog bhejna chahte hai taki wo id bana sake iske related
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}
export default CreatePost;
