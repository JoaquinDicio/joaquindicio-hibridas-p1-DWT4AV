const deleteButtons = document.querySelectorAll(".delete-button");

if (deleteButtons) {
  deleteButtons.forEach((button) => {
    const id = button.getAttribute("data-id");
    button.addEventListener("click", () => deleteProject(id));
  });
}

async function deleteProject(id) {
  try {
    const response = await fetch("/api/v1/projects/" + id, {
      method: "DELETE",
    });

    if (response.status == 200) {
      window.location.reload();
    }
  } catch (e) {
    console.log("Error eliminando el proyecto:", e);
  }
}
