<?php
    switch ($_GET['modal_id']) {
        case 'nova_vijest':
            echo 
            '<div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Dodaj novu vijest</h4>
            </div>
            <div class="modal-body">
                <form > 
                    <div class="form-group">
                        <label for="naziv">Naziv</label>
                        <input type="text" id="naziv" ng-model="noviNaziv">
                    </div>
                    <div class="form-group">
                        <label for="tekst">Tekst</label>
                        <input type="text" id="tekst" ng-model="noviTekst">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Odustani</button>
                <button type="button" class="btn btn-primary" ng-click="dodajVijest">Dodaj vijest</button>
            </div>';
            break;
    } 
?>