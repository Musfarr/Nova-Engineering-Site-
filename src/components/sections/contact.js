import React from 'react';

const Contact = () => {
  return (
    <div id="contactform" className="">
      <div>
        <div
          style={{
            backgroundColor: "",
            height: "600px",
            marginTop: "90px",
          }}
          className="uk-grid"
        >
          <div className="uk-width-1-2 " style={{ display: "flex" , backgroundColor:'black'  }}>
            <div className="uk-flex uk-flex-middle ">
              <img src="images/logo.jpeg" />
            </div>
          </div>

          <div className="uk-padding uk-width-1-2 form " style={{backgroundColor:'#101c2066'}} >
            <form>
              <fieldset class="uk-fieldset">
                <legend class=" uk-text-center uk-legend">Contact US</legend>
                  <div class="  uk-child-width-1-2 " uk-grid = "" >
                    <input
                      class="uk-input"
                      type="text"
                      placeholder="Input"
                      aria-label="Input"
                    />
                  <input
                    class="uk-input"
                    type="text"
                    placeholder="Input"
                    aria-label="Input"
                  />
                  <input
                    class="uk-input"
                    type="text"
                    placeholder="Input"
                    aria-label="Input"
                  />
                  <input
                    class="uk-input"
                    type="text"
                    placeholder="Input"
                    aria-label="Input"
                  />
                </div>

                <div class="uk-margin">
                  <select class="uk-select" aria-label="Select">
                    <option>Option 01</option>
                    <option>Option 02</option>
                  </select>
                </div>

                <div class="uk-margin">
                  <textarea
                    class="uk-textarea"
                    rows="5"
                    placeholder="Textarea"
                    aria-label="Textarea"
                  ></textarea>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

