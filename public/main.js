// async function init() {
//   let rustApp = null;
//   try {
//     rustApp = await import("../pkg");
//   } catch (e) {
//     console.error(e);
//     return;
//   }
//   console.log(rustApp);

//   const input = document.getElementById("upload");
//   //It's a function that let's you store data at js and we using thins method
//   //because
//   // input.files[0]  <- Returns a file object
//   // fileReader.result <- Returns a string and we would need that to transfer the pic as string to rust

//   const fileReader = new FileReader();

//   fileReader.onloadend = () => {
//     let base64 = fileReader.result.replace(
//       /^data:image\/(png|jpeg|jpg);base64,/,
//       ""
//     );
//     rustApp.grayscale(base64);
//   };
//   input.addEventListener("change", () => {
//     fileReader.readAsDataURL(input.files[0]);
//   });
// }
// init();

async function init() {
  let rustApp = null;

  try {
    rustApp = await import("../pkg");
  } catch (err) {
    console.error(err);
    return;
  }

  console.log(rustApp);

  const input = document.getElementById("upload");
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    let base64 = fileReader.result.replace(
      /^data:image\/(png|jpeg|jpg);base64,/,
      ""
    );
    let img_data_url = rustApp.grayscale(base64);
    document.getElementById("new-img").setAttribute("src", img_data_url);
  };

  input.addEventListener("change", () => {
    fileReader.readAsDataURL(input.files[0]);
  });
}

init();
