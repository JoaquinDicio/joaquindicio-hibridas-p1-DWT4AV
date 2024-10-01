import { PROJECT_TYPES } from "../consts.js";

const projectsView = {
  createDetailPage(project) {
    let html = `
    <section class="bg-slate-200 w-full min-h-screen p-5">
    <div class="bg-white rounded-sm shadow-sm p-8 flex">
        <img src="${project.img}" />
        <div class="px-7">
          <h2 class="font-medium text-2xl mb-2">${project.name}</h2>
          <p>${project.description}</p>
          <p class="pt-3 mb-5">
            <b>Tecnologias:</b> ${project.technologies.join(", ")}
          </p>
          <a class="rounded-sm bg-blue-500 text-white px-3 py-2" href="${
            project.link
          }">
          Ver proyecto
          </a>
        </div>
    </div>
    </section>`;
    return html;
  },

  createList(projectsArray) {
    let list = "";

    projectsArray?.forEach((project) => {
      list += `
        <li class="flex bg-white p-5 rounded-sm shadow-sm mx-2">
            <img src=${project.img} alt=${
        project.name
      } class="max-w-[250px] rounded-sm"/>
            <div class="flex justify-between flex-col px-4">
                <div>
                    <p class="font-medium">${project.name}</p>
                    <p>${project.description}</p>
                    <p><b>Tecnologias:</b> ${project.technologies.join(
                      ", "
                    )} </p>
                </div>
                <div class="flex gap-2">
                  <a href="/projects/${
                    project._id
                  }" class="w-fit bg-blue-500 text-white rounded-sm px-2 py-1 text-sm" >Ver proyecto</a>
                  <button data-id="${
                    project._id
                  }" class="w-fit bg-red-500 text-white rounded-sm px-2 delete-button py-1 text-sm" >Eliminar</a>
                  </div>
            </div>
        </li>`;
    });

    let html = `
    <section class="bg-slate-200 w-full min-h-screen">
    <div>
        <ul class="flex flex-col gap-2 pt-2">
            ${list}
        </ul>
    </div>
    </section>`;

    return html;
  },

  useLayout(title, content, scriptFile = null) {
    let layout = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <title>${title}</title>
        </head>
        <body>
        <header class="py-8 mx-10">
          <nav class="flex justify-between items-center">
            <h1 class="text-xl font-medium">${title}</h1>
            <ul class="flex gap-2 text-blue-500">
              <li> <a href="./projects?section=mobile">Mobile</a> </li>
              <li> <a href="./projects?section=landing">Landing</a> </li>
              <li> <a href="./projects?section=backend">Backend</a> </li>
              <li> <a href="./projects?section=website">Webiste</a> </li>
              <li> <a href="./projects?section=games">Games</a> </li>
            </ul>
          </nav>
        </header>
            ${content}
            ${scriptFile ? `<script src="${scriptFile}" ></script>` : ""}
        </body>
    </html>
    `;
    return layout;
  },
};

export default projectsView;
