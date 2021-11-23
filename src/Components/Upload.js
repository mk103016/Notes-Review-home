import React from 'react'

export default function Upload() {
    return (
        <>
             <div class="container">
        <div class="row">
            <h1> Upload your notes here </h1>
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left"> <strong> Upload in Multi Selection </strong> </div>

                    </div>

                    <div class="card-body card-block">
                        <form action="" method="post" enctype="multipart/form-data" class="form-horizontal">
                            <div class="row form-group">
                                <div class="col-12 col-md-12">
                                    <div class="control-group" id="fields">
                                        <input type="text" placeholder="Enter Subject"/>
                                        <label class="control-label" for="field1">
                                                Upload File
                                            </label>
                                        <div class="controls">
                                            <div class="entry input-group upload-input-group">
                                                <input class="form-control" name="fields[]" type="file"/>
                                                <button class="btn btn-upload btn-success btn-add" type="button">
                                                        <i class="fa fa-plus"> </i>
                                                    </button>
                                            </div>
                                        </div>
                                        <div class="wrapper">
                                            <div class="title">
                                                <h5>Author:-</h5>
                                            </div>
                                            <input type="text" placeholder="Enter Author"/>
                                            <br/>
                                            <div class="title">
                                                <h5>Description:-</h5>
                                            </div>
                                            <input type="text" placeholder="Enter a description in less than 100 words"/>
                                            <br/>
                                            <div class="title">
                                                <h5>Tags:-</h5>
                                            </div>
                                            <div class="content">
                                                <p>Press enter after each tag</p>
                                                <ul><input type="text" spellcheck="false"/></ul>
                                            </div>
                                            <div class="details">
                                                <p><span>10</span> tags are remaining</p>
                                                <button>Remove All</button>
                                            </div>
                                        </div>
                                        <script src="script.js"></script>
                                        <button class="btn btn-primary"> Upload </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>   
        </>
    )
}
