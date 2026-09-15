function toggleProfileMenu() {

        const dropdown =
            document.getElementById("profileDropdown");

        dropdown.classList.toggle("active");

    }


    document.addEventListener("click", function(event) {

        const profileWrapper =
            document.querySelector(".profile-wrapper");

        const dropdown =
            document.getElementById("profileDropdown");

        if (
            profileWrapper &&
            !profileWrapper.contains(event.target)
        ) {

            dropdown.classList.remove("active");

        }

});

function toggleSidebar() {

            const sidebar = document.getElementById("sidebarMenu");
            const overlay = document.getElementById("sidebarOverlay");
            const menuButton = document.querySelector(".menu-toggle");

            const isOpen = sidebar.classList.toggle("active");

            overlay.classList.toggle("active", isOpen);

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            document.body.classList.toggle(
                "sidebar-open",
                isOpen
            );
        }


        // Close sidebar when clicking an anchor link
        document.querySelectorAll(".sidebar a").forEach(function (link) {

            link.addEventListener("click", function () {

                const sidebar =
                    document.getElementById("sidebarMenu");

                const overlay =
                    document.getElementById("sidebarOverlay");

                const menuButton =
                    document.querySelector(".menu-toggle");

                sidebar.classList.remove("active");

                overlay.classList.remove("active");

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                document.body.classList.remove(
                    "sidebar-open"
                );

            });

        });
