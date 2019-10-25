$(document).ready(function() {
    var url = "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=yellow+flowers&image_type=photo&pretty=true";
    $.getJSON(
        url,
        function(data){
            let result = "";
            data.hits.forEach(item =>{
                result +=`
                    <div class="col-3"></div>
                    <div class="card col-6 mt-5">
                        <div class="card-body">
                            <img src="${item.webformatURL}" class="img-fluid">
                        </div>
                        <div class="card-footer">
                            <img src="${item.userImageURL}" class="rounded-circle" width="40">
                            ${item.tags}
                            <i class ="material-icons float-left text-danger">favorite</i>
                            <button type="button" class="btn btn-warning float-right" data-toggle="modal" data-target="#view${item.id}">View</button>
                        </div>
                    </div>
                    <div class="col-3"></div>


                        <div class="modal fade" id="view${item.id}">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header text-uppercase text-info">
                                        <img src="${item.userImageURL}" class="rounded-circle float-right" width="40">
                                        ${item.user}
                                        
                                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div class="card-body">
                                            <img src="${item.webformatURL}" class="img-fluid">
                                        <hr>
                                        <ul class="list-group list-group-horizontal">
                                            <li class="list-group-item">
                                                    <i class="material-icons text-success">thumb_up</i>
                                                    ${item.likes}
                                            </li>
                                            <li class="list-group-item">
                                                    <i class="material-icons text-danger">favorite</i>
                                                    ${item.favorites}
                                            </li>
                                            <li class="list-group-item">
                                                    <i class="material-icons text-primary">visibility</i>
                                                    ${item.views}
                                            </li>
                                            <li class="list-group-item">
                                                    <i class="material-icons text-warning">message</i>
                                                    ${item.comments}
                                            </li>  
                                        </ul>
                                    </div>  
                                </div>
                            </div>
                        </div>
                `;
            });
            $('#card').append(result);
        }
    );
});