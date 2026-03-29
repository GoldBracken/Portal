var emailList = [];
        function formSubmit() {
           var email = document.getElementById('contact-email').value;
           emailList.push(email);
           var alert = document.getElementById('invalid');
           
           if(!email.includes("@") || !email.includes(".")) {
                alert.innerHTML = "<p for='contact-email' id='invalid'>Incorrect email format. Please enter a valid email.</p>";
           }
           else {
                document.getElementById('contact-email').value = "";
                alert.innerHTML = "<p for='contact-email' id='invalid'></p>";
           }
        }



        function createTable() {
            var table = document.getElementById('ice');
            fetch('ice_projects.json')
                .then(function(response){ return response.json(); })
                .then(function(projects){
                    var html = '';
                    projects.forEach(function(p, idx){
                        if (idx % 3 === 0) html += '<tr class="proj-row">';
                        html += '<td class="proj-card">';
                        html += '<div class="card-name"><a href="'+p.page+'">'+p.name.replace(/_/g,' ')+'</a></div>';
                        html += '<div class="card-image"><img src="'+p.image+'" alt="folder image"></div>';
                        html += '<div class="card-p">'+p.description+'</div>';
                        html += '</td>';
                        if (idx % 3 === 2) html += '</tr>';
                    });
                    var remainder = projects.length % 3;
                    if (remainder !== 0) {
                        for (var i = 0; i < 3 - remainder; i++) html += '<td class="proj-card empty"></td>';
                        html += '</tr>';
                    }
                    table.innerHTML = html;
                })
                .catch(function(err){
                    console.error('Failed to load ICE projects:', err);
                });
        }

        function creatList() {
            var list = document.getElementById('project-list');
            fetch('ice_projects.json')
                .then(function(response){ return response.json(); })
                .then(function(projects){
                    var html = '';
                    projects.forEach(function(p){
                        var name = p.name.replace("_", " ")
                        html += '<li><a href="' + p.page + '">' + name + '</a> — ' + p.description + '</li>';
                    });
                    list.innerHTML = html;
                })
                .catch(function(err){
                    console.error('Failed to load ICE projects:', err);
                });
        }

        document.addEventListener('DOMContentLoaded', function(){
            createTable();
            creatList();
        });

