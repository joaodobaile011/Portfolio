document.addEventListener("DOMContentLoaded", function () {


    /* =========================================
       MOUSE GLOW
    ========================================= */

    const mouseGlow =
        document.querySelector(".mouse-glow");


    if (mouseGlow) {

        document.addEventListener(
            "mousemove",
            function (event) {

                mouseGlow.style.left =
                    event.clientX + "px";

                mouseGlow.style.top =
                    event.clientY + "px";

            }
        );

    }


    /* =========================================
       MENU MOBILE
    ========================================= */

    const menuButton =
        document.getElementById(
            "menu-button"
        );

    const navigation =
        document.getElementById(
            "nav"
        );


    if (menuButton && navigation) {

        menuButton.addEventListener(
            "click",
            function () {

                navigation.classList.toggle(
                    "open"
                );

            }
        );


        navigation
            .querySelectorAll("a")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        navigation.classList.remove(
                            "open"
                        );

                    }
                );

            });

    }


    /* =========================================
       SCROLL SUAVE
    ========================================= */

    document
        .querySelectorAll(
            'a[href^="#"]'
        )
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }


                    const target =
                        document.querySelector(
                            targetId
                        );


                    if (!target) {
                        return;
                    }


                    event.preventDefault();


                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =========================================
       TERMINAL INTERATIVO
    ========================================= */

    const terminal =
        document.getElementById(
            "terminal-content"
        );


    if (terminal) {

        const commands = [

            {
                command: "skills",
                response:
                    "Java | JavaScript | C# | SQL | HTML | CSS"
            },

            {
                command: "projects",
                response:
                    "Velocímetro | CRUD | Banco de Dados"
            },

            {
                command: "github",
                response:
                    "github.com/joaodobaile011"
            },

            {
                command: "contact",
                response:
                    "jferminobrandao@gmail.com"
            }

        ];


        terminal.addEventListener(
            "click",
            function () {

                const random =
                    commands[
                        Math.floor(
                            Math.random() *
                            commands.length
                        )
                    ];


                const command =
                    document.createElement(
                        "p"
                    );


                command.innerHTML =
                    "<strong>" +
                    "joao@portfolio" +
                    "</strong>:~$ " +
                    random.command;


                const response =
                    document.createElement(
                        "p"
                    );


                response.className =
                    "terminal-result";


                response.textContent =
                    random.response;


                terminal.appendChild(
                    command
                );

                terminal.appendChild(
                    response
                );


                terminal.scrollTop =
                    terminal.scrollHeight;

            }
        );

    }


    /* =========================================
       EFEITO 3D NOS PROJETOS
    ========================================= */

    const projects =
        document.querySelectorAll(
            ".project"
        );


    projects.forEach(function (project) {


        project.addEventListener(
            "mousemove",
            function (event) {

                if (
                    window.innerWidth < 850
                ) {
                    return;
                }


                const rect =
                    project.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const rotateX =
                    ((y / rect.height) - 0.5)
                    * -5;


                const rotateY =
                    ((x / rect.width) - 0.5)
                    * 5;


                project.style.transform =
                    "perspective(900px)" +
                    " rotateX(" +
                    rotateX +
                    "deg)" +
                    " rotateY(" +
                    rotateY +
                    "deg)" +
                    " translateY(-6px)";

            }
        );


        project.addEventListener(
            "mouseleave",
            function () {

                project.style.transform =
                    "";

            }
        );

    });


    /* =========================================
       ANIMAÇÃO DOS CARDS DE SKILLS
    ========================================= */

    const skills =
        document.querySelectorAll(
            ".skill"
        );


    skills.forEach(
        function (skill, index) {

            skill.style.opacity = "0";

            skill.style.transform =
                "translateY(25px)";


            setTimeout(
                function () {

                    skill.style.transition =
                        "0.6s ease";

                    skill.style.opacity =
                        "1";

                    skill.style.transform =
                        "translateY(0)";

                },
                150 + (index * 100)
            );

        }
    );


    /* =========================================
       LOG
    ========================================= */

    console.log(
        "João Luiz | Portfólio iniciado"
    );

});