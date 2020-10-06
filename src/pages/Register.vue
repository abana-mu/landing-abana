<template>
  <Layout class="one-section-tight-layout">
    <div class="mobile-gutter">
      <h1 class="title">{{ Data.header.title }}</h1>
      <p class="subtitle">
        {{ Data.header.subtext }}
      </p>
    </div>
    <div class="mt-3">
      <div class="back-blue">
        <h3 class="iama">I am a:</h3>
      </div>
      <b-tabs align="center" content-class="pt-5 pb-5 back-grey">
        <!--------- BUYERS --------->
        <b-tab title="Buyer" active>
          <div class="form-container container">
            <form
              action="https://abana.us4.list-manage.com/subscribe/post"
              method="POST"
            >
              <input type="hidden" name="u" value="eb06fa43da9637c731317d472" />
              <input type="hidden" name="id" value="c18868158b" />

              <div class="row form-row">
                <!-- TYPE -->
                <div class="col-12 col-md-4 pb-3 pb-md-0 pl-3 pl-md-5">
                  <h4>Your Details</h4>
                  <p class="text-lighter">*Required</p>
                </div>
                <div class="col-12 col-md-8 px-3 pl-md-0">
                  <div class="form-group row d-none">
                    <label for="MERGE6">Type</label>
                    <div class="field-group">
                      <div class="interestgroup_field radio-group" id="MERGE6">
                        <label class="radio" for="MERGE6-0"
                          ><input
                            type="radio"
                            data-dojo-type="dijit/form/RadioButton"
                            name="MERGE6"
                            id="MERGE6-0"
                            value="Buyer"
                            class="av-radio"
                            checked
                          /><span>Buyer</span></label
                        >
                        <label class="radio" for="MERGE6-1"
                          ><input
                            type="radio"
                            data-dojo-type="dijit/form/RadioButton"
                            name="MERGE6"
                            id="MERGE6-1"
                            value="Manufacturer"
                            class="av-radio"
                          /><span>Manufacturer</span></label
                        >
                        <label class="radio" for="MERGE6-2"
                          ><input
                            type="radio"
                            data-dojo-type="dijit/form/RadioButton"
                            name="MERGE6"
                            id="MERGE6-2"
                            value="Textile Producer"
                            class="av-radio"
                          /><span>Textile Producer</span></label
                        >
                        <label class="radio" for="MERGE6-3"
                          ><input
                            type="radio"
                            data-dojo-type="dijit/form/RadioButton"
                            name="MERGE6"
                            id="MERGE6-3"
                            value="Service Provider"
                            class="av-radio"
                          /><span>Service Provider</span></label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- NAME -->

                  <div class="form-group row">
                    <label for="MERGE1" class="col-md-10 col-form-label"
                      >Name <span class="req asterisk">*</span></label
                    >
                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        name="MERGE1"
                        id="MERGE1"
                        size="25"
                        value=""
                        required
                      />
                    </div>
                  </div>

                  <!-- EMAIL -->

                  <div class="form-group row">
                    <label for="MERGE0" class="col-md-10 col-form-label"
                      >Email Address <span class="req asterisk">*</span></label
                    >
                    <div class="col-md-10">
                      <input
                        type="email"
                        class="form-control"
                        name="MERGE0"
                        id="MERGE0"
                        size="25"
                        value=""
                        required
                      />
                    </div>
                  </div>

                  <!-- INTEREST -->

                  <div class="form-group row">
                    <label for="MERGE5" class="col-md-10 col-form-label"
                      >Interest</label
                    >
                    <div class="col-md-10">
                      <select class="custom-select" id="MERGE5" name="MERGE5">
                        <option value="" disabled selected
                          >Select your Interest</option
                        ><option value="Regional Information"
                          >Regional Information</option
                        ><option value="Suppliers">Suppliers</option
                        ><option value="Quick Response Production"
                          >Quick Response Production</option
                        ><option value="Ready To Ship, Low MOQ, Private Label"
                          >Ready To Ship, Low MOQ, Private Label</option
                        ><option value="Regional Brands"
                          >Regional Brands</option
                        >
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="w-100 divider my-2" />

              <div class="row form-row">
                <div class="col-12 col-md-4 pb-3 pb-md-0 pl-3 pl-md-5">
                  <h4>Your Company</h4>
                  <p class="text-lighter">*Required</p>
                </div>

                <div class="col-12 col-md-8 px-3 pl-md-0">
                  <!-- COMPANY & POSITION -->

                  <div class="form row mb-3">
                    <label for="MERGE7" class="col-md-5 col-form-label order-0">
                      Company
                      <span class="req asterisk">*</span>
                    </label>

                    <div class="col-md-5 order-3 mb-3 mb-md-0 order-md-6">
                      <input
                        type="text"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE7"
                        id="MERGE7"
                        size="25"
                        value=""
                        required
                      />
                    </div>

                    <label
                      for="MERGE4"
                      class="col-md-5 col-form-label order-6 order-md-3"
                      >Position
                    </label>

                    <div class="col-md-5 order-9">
                      <input
                        type="text"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE4"
                        id="MERGE4"
                        size="25"
                        value=""
                      />
                    </div>
                  </div>

                  <!-- CITY & COUNTRY-->

                  <div class="form-group row">
                    <label for="MERGE3" class="col-md-10 col-form-label"
                      >Country <span class="req asterisk">*</span>
                    </label>

                    <div class="col-md-10 ">
                      <select
                        class="custom-select"
                        id="MERGE3"
                        name="MERGE3"
                        required
                        ><option value="" disabled selected
                          >Select your Country</option
                        ><option value="United States of America"
                          >United States of America</option
                        ><option value="Aaland Islands">Aaland Islands</option
                        ><option value="Afghanistan">Afghanistan</option
                        ><option value="Albania">Albania</option
                        ><option value="Algeria">Algeria</option
                        ><option value="American Samoa">American Samoa</option
                        ><option value="Andorra">Andorra</option
                        ><option value="Angola">Angola</option
                        ><option value="Anguilla">Anguilla</option
                        ><option value="Antarctica">Antarctica</option
                        ><option value="Antigua And Barbuda"
                          >Antigua And Barbuda</option
                        ><option value="Argentina">Argentina</option
                        ><option value="Armenia">Armenia</option
                        ><option value="Aruba">Aruba</option
                        ><option value="Australia">Australia</option
                        ><option value="Austria">Austria</option
                        ><option value="Azerbaijan">Azerbaijan</option
                        ><option value="Bahamas">Bahamas</option
                        ><option value="Bahrain">Bahrain</option
                        ><option value="Bangladesh">Bangladesh</option
                        ><option value="Barbados">Barbados</option
                        ><option value="Belarus">Belarus</option
                        ><option value="Belgium">Belgium</option
                        ><option value="Belize">Belize</option
                        ><option value="Benin">Benin</option
                        ><option value="Bermuda">Bermuda</option
                        ><option value="Bhutan">Bhutan</option
                        ><option value="Bolivia">Bolivia</option
                        ><option value="Bonaire, Saint Eustatius and Saba"
                          >Bonaire, Saint Eustatius and Saba</option
                        ><option value="Bosnia and Herzegovina"
                          >Bosnia and Herzegovina</option
                        ><option value="Botswana">Botswana</option
                        ><option value="Bouvet Island">Bouvet Island</option
                        ><option value="Brazil">Brazil</option
                        ><option value="British Indian Ocean Territory"
                          >British Indian Ocean Territory</option
                        ><option value="Brunei Darussalam"
                          >Brunei Darussalam</option
                        ><option value="Bulgaria">Bulgaria</option
                        ><option value="Burkina Faso">Burkina Faso</option
                        ><option value="Burundi">Burundi</option
                        ><option value="Cambodia">Cambodia</option
                        ><option value="Cameroon">Cameroon</option
                        ><option value="Canada">Canada</option
                        ><option value="Cape Verde">Cape Verde</option
                        ><option value="Cayman Islands">Cayman Islands</option
                        ><option value="Central African Republic"
                          >Central African Republic</option
                        ><option value="Chad">Chad</option
                        ><option value="Chile">Chile</option
                        ><option value="China">China</option
                        ><option value="Christmas Island"
                          >Christmas Island</option
                        ><option value="Cocos (Keeling) Islands"
                          >Cocos (Keeling) Islands</option
                        ><option value="Colombia">Colombia</option
                        ><option value="Comoros">Comoros</option
                        ><option value="Congo">Congo</option
                        ><option value="Cook Islands">Cook Islands</option
                        ><option value="Costa Rica">Costa Rica</option
                        ><option value="Cote D'Ivoire">Cote D'Ivoire</option
                        ><option value="Croatia">Croatia</option
                        ><option value="Cuba">Cuba</option
                        ><option value="Curacao">Curacao</option
                        ><option value="Cyprus">Cyprus</option
                        ><option value="Czech Republic">Czech Republic</option
                        ><option value="Democratic Republic of the Congo"
                          >Democratic Republic of the Congo</option
                        ><option value="Denmark">Denmark</option
                        ><option value="Djibouti">Djibouti</option
                        ><option value="Dominica">Dominica</option
                        ><option value="Dominican Republic"
                          >Dominican Republic</option
                        ><option value="Ecuador">Ecuador</option
                        ><option value="Egypt">Egypt</option
                        ><option value="El Salvador">El Salvador</option
                        ><option value="Equatorial Guinea"
                          >Equatorial Guinea</option
                        ><option value="Eritrea">Eritrea</option
                        ><option value="Estonia">Estonia</option
                        ><option value="Ethiopia">Ethiopia</option
                        ><option value="Falkland Islands"
                          >Falkland Islands</option
                        ><option value="Faroe Islands">Faroe Islands</option
                        ><option value="Fiji">Fiji</option
                        ><option value="Finland">Finland</option
                        ><option value="France">France</option
                        ><option value="French Guiana">French Guiana</option
                        ><option value="French Polynesia"
                          >French Polynesia</option
                        ><option value="French Southern Territories"
                          >French Southern Territories</option
                        ><option value="Gabon">Gabon</option
                        ><option value="Gambia">Gambia</option
                        ><option value="Georgia">Georgia</option
                        ><option value="Germany">Germany</option
                        ><option value="Ghana">Ghana</option
                        ><option value="Gibraltar">Gibraltar</option
                        ><option value="Greece">Greece</option
                        ><option value="Greenland">Greenland</option
                        ><option value="Grenada">Grenada</option
                        ><option value="Guadeloupe">Guadeloupe</option
                        ><option value="Guam">Guam</option
                        ><option value="Guatemala">Guatemala</option
                        ><option value="Guernsey">Guernsey</option
                        ><option value="Guinea">Guinea</option
                        ><option value="Guinea-Bissau">Guinea-Bissau</option
                        ><option value="Guyana">Guyana</option
                        ><option value="Haiti">Haiti</option
                        ><option value="Heard and Mc Donald Islands"
                          >Heard and Mc Donald Islands</option
                        ><option value="Honduras">Honduras</option
                        ><option value="Hong Kong">Hong Kong</option
                        ><option value="Hungary">Hungary</option
                        ><option value="Iceland">Iceland</option
                        ><option value="India">India</option
                        ><option value="Indonesia">Indonesia</option
                        ><option value="Iran">Iran</option
                        ><option value="Iraq">Iraq</option
                        ><option value="Ireland">Ireland</option
                        ><option value="Isle of Man">Isle of Man</option
                        ><option value="Israel">Israel</option
                        ><option value="Italy">Italy</option
                        ><option value="Jamaica">Jamaica</option
                        ><option value="Japan">Japan</option
                        ><option value="Jersey  (Channel Islands)"
                          >Jersey (Channel Islands)</option
                        ><option value="Jordan">Jordan</option
                        ><option value="Kazakhstan">Kazakhstan</option
                        ><option value="Kenya">Kenya</option
                        ><option value="Kiribati">Kiribati</option
                        ><option value="Kuwait">Kuwait</option
                        ><option value="Kyrgyzstan">Kyrgyzstan</option
                        ><option value="Lao People's Democratic Republic"
                          >Lao People's Democratic Republic</option
                        ><option value="Latvia">Latvia</option
                        ><option value="Lebanon">Lebanon</option
                        ><option value="Lesotho">Lesotho</option
                        ><option value="Liberia">Liberia</option
                        ><option value="Libya">Libya</option
                        ><option value="Liechtenstein">Liechtenstein</option
                        ><option value="Lithuania">Lithuania</option
                        ><option value="Luxembourg">Luxembourg</option
                        ><option value="Macau">Macau</option
                        ><option value="Macedonia">Macedonia</option
                        ><option value="Madagascar">Madagascar</option
                        ><option value="Malawi">Malawi</option
                        ><option value="Malaysia">Malaysia</option
                        ><option value="Maldives">Maldives</option
                        ><option value="Mali">Mali</option
                        ><option value="Malta">Malta</option
                        ><option value="Marshall Islands"
                          >Marshall Islands</option
                        ><option value="Martinique">Martinique</option
                        ><option value="Mauritania">Mauritania</option
                        ><option value="Mauritius">Mauritius</option
                        ><option value="Mayotte">Mayotte</option
                        ><option value="Mexico">Mexico</option
                        ><option value="Micronesia, Federated States of"
                          >Micronesia, Federated States of</option
                        ><option value="Moldova, Republic of"
                          >Moldova, Republic of</option
                        ><option value="Monaco">Monaco</option
                        ><option value="Mongolia">Mongolia</option
                        ><option value="Montenegro">Montenegro</option
                        ><option value="Montserrat">Montserrat</option
                        ><option value="Morocco">Morocco</option
                        ><option value="Mozambique">Mozambique</option
                        ><option value="Myanmar">Myanmar</option
                        ><option value="Namibia">Namibia</option
                        ><option value="Nauru">Nauru</option
                        ><option value="Nepal">Nepal</option
                        ><option value="Netherlands">Netherlands</option
                        ><option value="Netherlands Antilles"
                          >Netherlands Antilles</option
                        ><option value="New Caledonia">New Caledonia</option
                        ><option value="New Zealand">New Zealand</option
                        ><option value="Nicaragua">Nicaragua</option
                        ><option value="Niger">Niger</option
                        ><option value="Nigeria">Nigeria</option
                        ><option value="Niue">Niue</option
                        ><option value="Norfolk Island">Norfolk Island</option
                        ><option value="North Korea">North Korea</option
                        ><option value="Northern Mariana Islands"
                          >Northern Mariana Islands</option
                        ><option value="Norway">Norway</option
                        ><option value="Oman">Oman</option
                        ><option value="Pakistan">Pakistan</option
                        ><option value="Palau">Palau</option
                        ><option value="Palestine">Palestine</option
                        ><option value="Panama">Panama</option
                        ><option value="Papua New Guinea"
                          >Papua New Guinea</option
                        ><option value="Paraguay">Paraguay</option
                        ><option value="Peru">Peru</option
                        ><option value="Philippines">Philippines</option
                        ><option value="Pitcairn">Pitcairn</option
                        ><option value="Poland">Poland</option
                        ><option value="Portugal">Portugal</option
                        ><option value="Puerto Rico">Puerto Rico</option
                        ><option value="Qatar">Qatar</option
                        ><option value="Republic of Kosovo"
                          >Republic of Kosovo</option
                        ><option value="Reunion">Reunion</option
                        ><option value="Romania">Romania</option
                        ><option value="Russia">Russia</option
                        ><option value="Rwanda">Rwanda</option
                        ><option value="Saint Kitts and Nevis"
                          >Saint Kitts and Nevis</option
                        ><option value="Saint Lucia">Saint Lucia</option
                        ><option value="Saint Martin">Saint Martin</option
                        ><option value="Saint Vincent and the Grenadines"
                          >Saint Vincent and the Grenadines</option
                        ><option value="Samoa (Independent)"
                          >Samoa (Independent)</option
                        ><option value="San Marino">San Marino</option
                        ><option value="Sao Tome and Principe"
                          >Sao Tome and Principe</option
                        ><option value="Saudi Arabia">Saudi Arabia</option
                        ><option value="Senegal">Senegal</option
                        ><option value="Serbia">Serbia</option
                        ><option value="Seychelles">Seychelles</option
                        ><option value="Sierra Leone">Sierra Leone</option
                        ><option value="Singapore">Singapore</option
                        ><option value="Sint Maarten">Sint Maarten</option
                        ><option value="Slovakia">Slovakia</option
                        ><option value="Slovenia">Slovenia</option
                        ><option value="Solomon Islands">Solomon Islands</option
                        ><option value="Somalia">Somalia</option
                        ><option value="South Africa">South Africa</option
                        ><option
                          value="South Georgia and the South Sandwich Islands"
                          >South Georgia and the South Sandwich Islands</option
                        ><option value="South Korea">South Korea</option
                        ><option value="South Sudan">South Sudan</option
                        ><option value="Spain">Spain</option
                        ><option value="Sri Lanka">Sri Lanka</option
                        ><option value="St. Helena">St. Helena</option
                        ><option value="St. Pierre and Miquelon"
                          >St. Pierre and Miquelon</option
                        ><option value="Sudan">Sudan</option
                        ><option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen Islands"
                          >Svalbard and Jan Mayen Islands</option
                        ><option value="Swaziland">Swaziland</option
                        ><option value="Sweden">Sweden</option
                        ><option value="Switzerland">Switzerland</option
                        ><option value="Syria">Syria</option
                        ><option value="Taiwan">Taiwan</option
                        ><option value="Tajikistan">Tajikistan</option
                        ><option value="Tanzania">Tanzania</option
                        ><option value="Thailand">Thailand</option
                        ><option value="Timor-Leste">Timor-Leste</option
                        ><option value="Togo">Togo</option
                        ><option value="Tokelau">Tokelau</option
                        ><option value="Tonga">Tonga</option
                        ><option value="Trinidad and Tobago"
                          >Trinidad and Tobago</option
                        ><option value="Tunisia">Tunisia</option
                        ><option value="Turkey">Turkey</option
                        ><option value="Turkmenistan">Turkmenistan</option
                        ><option value="Turks &amp; Caicos Islands"
                          >Turks &amp; Caicos Islands</option
                        ><option value="Turks and Caicos Islands"
                          >Turks and Caicos Islands</option
                        ><option value="Tuvalu">Tuvalu</option
                        ><option value="Uganda">Uganda</option
                        ><option value="Ukraine">Ukraine</option
                        ><option value="United Arab Emirates"
                          >United Arab Emirates</option
                        ><option value="United Kingdom">United Kingdom</option
                        ><option value="Uruguay">Uruguay</option
                        ><option value="USA Minor Outlying Islands"
                          >USA Minor Outlying Islands</option
                        ><option value="Uzbekistan">Uzbekistan</option
                        ><option value="Vanuatu">Vanuatu</option
                        ><option value="Vatican City State (Holy See)"
                          >Vatican City State (Holy See)</option
                        ><option value="Venezuela">Venezuela</option
                        ><option value="Vietnam">Vietnam</option
                        ><option value="Virgin Islands (British)"
                          >Virgin Islands (British)</option
                        ><option value="Virgin Islands (U.S.)"
                          >Virgin Islands (U.S.)</option
                        ><option value="Wallis and Futuna Islands"
                          >Wallis and Futuna Islands</option
                        ><option value="Western Sahara">Western Sahara</option
                        ><option value="Yemen">Yemen</option
                        ><option value="Zambia">Zambia</option
                        ><option value="Zimbabwe">Zimbabwe</option></select
                      >
                    </div>
                  </div>
                </div>
              </div>

              <hr class="w-100 divider my-4" />

              <div class="row form-row">
                <div class="col-12 col-md-4 pb-3 pb-md-0 pl-3 pl-md-5">
                  <h4>Comments</h4>
                  <p class="text-lighter">Optional</p>
                </div>

                <div class="col-12 col-md-8 px-3 pl-md-0">
                  <!-- COMMENTS -->

                  <div class="form-group row mb-3">
                    <div class="col-md-10 ">
                      <textarea
                        type="text"
                        rows="3"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE2"
                        id="MERGE2"
                        size="25"
                        value=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="w-100 divider my-4" />

              <div class="row form-row px-md-5  align-items-center">
                <div class="col-12 col-md-9 d-flex text-center text-md-left">
                  <p class="text-lighter mb-4 mb-md-0">
                    <i
                      >We respect your privacy and promise to never rent or
                      share your details with anybody</i
                    >
                  </p>
                </div>
                <div
                  class="col-12 col-md-3 d-flex justify-content-center justify-content-md-end"
                >
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </b-tab>
        <!--------- SUPPLIERS --------->
        <b-tab title="Supplier">
          <div class="form-container container">
            <form
              action="https://abana.us4.list-manage.com/subscribe/post"
              method="POST"
            >
              <input type="hidden" name="u" value="eb06fa43da9637c731317d472" />
              <input type="hidden" name="id" value="c18868158b" />

              <div class="row form-row">
                <!-- TYPE -->
                <div class="col-12 col-md-4 pb-3 pb-md-0 pl-3 pl-md-5">
                  <h4>Your Details</h4>
                  <p class="text-lighter">*Required</p>
                </div>
                <div class="col-12 col-md-8 px-3 pl-md-0">
                  <div class="form-group row">
                    <label for="MERGE6" class="col-md-10 col-form-label"
                      >I am a (select one)
                      <span class="req asterisk">*</span></label
                    >
                    <div class="radio-buttons">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="MERGE6"
                          id="inlineRadio1"
                          value="Manufacturer"
                          checked
                        />
                        <label
                          class="form-check-label btn btn-outline-primary"
                          for="inlineRadio1"
                          >Manufacturer</label
                        >
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="MERGE6"
                          id="inlineRadio2"
                          value="Textile Producer"
                        />
                        <label
                          class="form-check-label btn btn-outline-primary"
                          for="inlineRadio2"
                          >Textile Producer</label
                        >
                      </div>
                      <div class="form-check ">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="MERGE6"
                          id="inlineRadio3"
                          value="Service Provider"
                        />
                        <label
                          class="form-check-label btn btn-outline-primary"
                          for="inlineRadio3"
                          >Service Provider</label
                        >
                      </div>
                    </div>
                  </div>

                  <!-- NAME -->

                  <div class="form-group row">
                    <label for="MERGE1" class="col-md-10 col-form-label"
                      >Name <span class="req asterisk">*</span></label
                    >
                    <div class="col-md-10">
                      <input
                        type="text"
                        class="form-control"
                        name="MERGE1"
                        id="MERGE1"
                        size="25"
                        value=""
                      />
                    </div>
                  </div>

                  <!-- EMAIL -->

                  <div class="form-group row">
                    <label for="MERGE0" class="col-md-10 col-form-label"
                      >Email Address <span class="req asterisk">*</span></label
                    >
                    <div class="col-md-10">
                      <input
                        type="email"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE0"
                        id="MERGE0"
                        size="25"
                        value=""
                        required
                        aria-invalid="false"
                      />
                    </div>
                  </div>

                  <!-- INTEREST -->

                  <div class="form-group row">
                    <label for="MERGE5" class="col-md-10 col-form-label"
                      >Product/Service</label
                    >
                    <div class="col-md-10">
                      <select
                        class="replaced custom-select my-1 mr-sm-2"
                        id="MERGE5"
                        name="MERGE5"
                      >
                        <option value="" disabled selected
                          >Select your Product/Service</option
                        ><option value="Clothing">Clothing</option
                        ><option value="Jewelry">Jewelry</option
                        ><option value="Footwear">Footwear</option
                        ><option value="Accessories">Accessories</option
                        ><option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="w-100 divider my-4" />
              <div class="row form-row">
                <div class="col-12 col-md-4 pb-3 pb-md-0 pl-3 pl-md-5">
                  <h4>Your Company</h4>
                  <p class="text-lighter">*Required</p>
                </div>

                <div class="col-12 col-md-8 px-3 pl-md-0">
                  <!-- COMPANY & POSITION -->

                  <div class="form row mb-3">
                    <label for="MERGE7" class="col-md-5 col-form-label order-0"
                      >Company <span class="req asterisk">*</span></label
                    >

                    <div class="col-md-5 order-3 mb-3 mb-md-0 order-md-6">
                      <input
                        type="text"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE7"
                        id="MERGE7"
                        size="25"
                        value=""
                        required
                      />
                    </div>

                    <label
                      for="MERGE4"
                      class="col-md-5 col-form-label order-6 order-md-3"
                      >Position</label
                    >

                    <div class="col-md-5 order-9">
                      <input
                        type="text"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE4"
                        id="MERGE4"
                        size="25"
                        value=""
                      />
                    </div>
                  </div>

                  <!-- CITY & COUNTRY-->

                  <div class="form-group row">
                    <label for="MERGE3" class="col-md-10 col-form-label"
                      >Country <span class="req asterisk">*</span></label
                    >

                    <div class="col-md-10 ">
                      <select
                        class="custom-select"
                        id="MERGE3"
                        name="MERGE3"
                        required
                        ><option value="" disabled selected
                          >Select your Country</option
                        ><option value="United States of America"
                          >United States of America</option
                        ><option value="Aaland Islands">Aaland Islands</option
                        ><option value="Afghanistan">Afghanistan</option
                        ><option value="Albania">Albania</option
                        ><option value="Algeria">Algeria</option
                        ><option value="American Samoa">American Samoa</option
                        ><option value="Andorra">Andorra</option
                        ><option value="Angola">Angola</option
                        ><option value="Anguilla">Anguilla</option
                        ><option value="Antarctica">Antarctica</option
                        ><option value="Antigua And Barbuda"
                          >Antigua And Barbuda</option
                        ><option value="Argentina">Argentina</option
                        ><option value="Armenia">Armenia</option
                        ><option value="Aruba">Aruba</option
                        ><option value="Australia">Australia</option
                        ><option value="Austria">Austria</option
                        ><option value="Azerbaijan">Azerbaijan</option
                        ><option value="Bahamas">Bahamas</option
                        ><option value="Bahrain">Bahrain</option
                        ><option value="Bangladesh">Bangladesh</option
                        ><option value="Barbados">Barbados</option
                        ><option value="Belarus">Belarus</option
                        ><option value="Belgium">Belgium</option
                        ><option value="Belize">Belize</option
                        ><option value="Benin">Benin</option
                        ><option value="Bermuda">Bermuda</option
                        ><option value="Bhutan">Bhutan</option
                        ><option value="Bolivia">Bolivia</option
                        ><option value="Bonaire, Saint Eustatius and Saba"
                          >Bonaire, Saint Eustatius and Saba</option
                        ><option value="Bosnia and Herzegovina"
                          >Bosnia and Herzegovina</option
                        ><option value="Botswana">Botswana</option
                        ><option value="Bouvet Island">Bouvet Island</option
                        ><option value="Brazil">Brazil</option
                        ><option value="British Indian Ocean Territory"
                          >British Indian Ocean Territory</option
                        ><option value="Brunei Darussalam"
                          >Brunei Darussalam</option
                        ><option value="Bulgaria">Bulgaria</option
                        ><option value="Burkina Faso">Burkina Faso</option
                        ><option value="Burundi">Burundi</option
                        ><option value="Cambodia">Cambodia</option
                        ><option value="Cameroon">Cameroon</option
                        ><option value="Canada">Canada</option
                        ><option value="Cape Verde">Cape Verde</option
                        ><option value="Cayman Islands">Cayman Islands</option
                        ><option value="Central African Republic"
                          >Central African Republic</option
                        ><option value="Chad">Chad</option
                        ><option value="Chile">Chile</option
                        ><option value="China">China</option
                        ><option value="Christmas Island"
                          >Christmas Island</option
                        ><option value="Cocos (Keeling) Islands"
                          >Cocos (Keeling) Islands</option
                        ><option value="Colombia">Colombia</option
                        ><option value="Comoros">Comoros</option
                        ><option value="Congo">Congo</option
                        ><option value="Cook Islands">Cook Islands</option
                        ><option value="Costa Rica">Costa Rica</option
                        ><option value="Cote D'Ivoire">Cote D'Ivoire</option
                        ><option value="Croatia">Croatia</option
                        ><option value="Cuba">Cuba</option
                        ><option value="Curacao">Curacao</option
                        ><option value="Cyprus">Cyprus</option
                        ><option value="Czech Republic">Czech Republic</option
                        ><option value="Democratic Republic of the Congo"
                          >Democratic Republic of the Congo</option
                        ><option value="Denmark">Denmark</option
                        ><option value="Djibouti">Djibouti</option
                        ><option value="Dominica">Dominica</option
                        ><option value="Dominican Republic"
                          >Dominican Republic</option
                        ><option value="Ecuador">Ecuador</option
                        ><option value="Egypt">Egypt</option
                        ><option value="El Salvador">El Salvador</option
                        ><option value="Equatorial Guinea"
                          >Equatorial Guinea</option
                        ><option value="Eritrea">Eritrea</option
                        ><option value="Estonia">Estonia</option
                        ><option value="Ethiopia">Ethiopia</option
                        ><option value="Falkland Islands"
                          >Falkland Islands</option
                        ><option value="Faroe Islands">Faroe Islands</option
                        ><option value="Fiji">Fiji</option
                        ><option value="Finland">Finland</option
                        ><option value="France">France</option
                        ><option value="French Guiana">French Guiana</option
                        ><option value="French Polynesia"
                          >French Polynesia</option
                        ><option value="French Southern Territories"
                          >French Southern Territories</option
                        ><option value="Gabon">Gabon</option
                        ><option value="Gambia">Gambia</option
                        ><option value="Georgia">Georgia</option
                        ><option value="Germany">Germany</option
                        ><option value="Ghana">Ghana</option
                        ><option value="Gibraltar">Gibraltar</option
                        ><option value="Greece">Greece</option
                        ><option value="Greenland">Greenland</option
                        ><option value="Grenada">Grenada</option
                        ><option value="Guadeloupe">Guadeloupe</option
                        ><option value="Guam">Guam</option
                        ><option value="Guatemala">Guatemala</option
                        ><option value="Guernsey">Guernsey</option
                        ><option value="Guinea">Guinea</option
                        ><option value="Guinea-Bissau">Guinea-Bissau</option
                        ><option value="Guyana">Guyana</option
                        ><option value="Haiti">Haiti</option
                        ><option value="Heard and Mc Donald Islands"
                          >Heard and Mc Donald Islands</option
                        ><option value="Honduras">Honduras</option
                        ><option value="Hong Kong">Hong Kong</option
                        ><option value="Hungary">Hungary</option
                        ><option value="Iceland">Iceland</option
                        ><option value="India">India</option
                        ><option value="Indonesia">Indonesia</option
                        ><option value="Iran">Iran</option
                        ><option value="Iraq">Iraq</option
                        ><option value="Ireland">Ireland</option
                        ><option value="Isle of Man">Isle of Man</option
                        ><option value="Israel">Israel</option
                        ><option value="Italy">Italy</option
                        ><option value="Jamaica">Jamaica</option
                        ><option value="Japan">Japan</option
                        ><option value="Jersey  (Channel Islands)"
                          >Jersey (Channel Islands)</option
                        ><option value="Jordan">Jordan</option
                        ><option value="Kazakhstan">Kazakhstan</option
                        ><option value="Kenya">Kenya</option
                        ><option value="Kiribati">Kiribati</option
                        ><option value="Kuwait">Kuwait</option
                        ><option value="Kyrgyzstan">Kyrgyzstan</option
                        ><option value="Lao People's Democratic Republic"
                          >Lao People's Democratic Republic</option
                        ><option value="Latvia">Latvia</option
                        ><option value="Lebanon">Lebanon</option
                        ><option value="Lesotho">Lesotho</option
                        ><option value="Liberia">Liberia</option
                        ><option value="Libya">Libya</option
                        ><option value="Liechtenstein">Liechtenstein</option
                        ><option value="Lithuania">Lithuania</option
                        ><option value="Luxembourg">Luxembourg</option
                        ><option value="Macau">Macau</option
                        ><option value="Macedonia">Macedonia</option
                        ><option value="Madagascar">Madagascar</option
                        ><option value="Malawi">Malawi</option
                        ><option value="Malaysia">Malaysia</option
                        ><option value="Maldives">Maldives</option
                        ><option value="Mali">Mali</option
                        ><option value="Malta">Malta</option
                        ><option value="Marshall Islands"
                          >Marshall Islands</option
                        ><option value="Martinique">Martinique</option
                        ><option value="Mauritania">Mauritania</option
                        ><option value="Mauritius">Mauritius</option
                        ><option value="Mayotte">Mayotte</option
                        ><option value="Mexico">Mexico</option
                        ><option value="Micronesia, Federated States of"
                          >Micronesia, Federated States of</option
                        ><option value="Moldova, Republic of"
                          >Moldova, Republic of</option
                        ><option value="Monaco">Monaco</option
                        ><option value="Mongolia">Mongolia</option
                        ><option value="Montenegro">Montenegro</option
                        ><option value="Montserrat">Montserrat</option
                        ><option value="Morocco">Morocco</option
                        ><option value="Mozambique">Mozambique</option
                        ><option value="Myanmar">Myanmar</option
                        ><option value="Namibia">Namibia</option
                        ><option value="Nauru">Nauru</option
                        ><option value="Nepal">Nepal</option
                        ><option value="Netherlands">Netherlands</option
                        ><option value="Netherlands Antilles"
                          >Netherlands Antilles</option
                        ><option value="New Caledonia">New Caledonia</option
                        ><option value="New Zealand">New Zealand</option
                        ><option value="Nicaragua">Nicaragua</option
                        ><option value="Niger">Niger</option
                        ><option value="Nigeria">Nigeria</option
                        ><option value="Niue">Niue</option
                        ><option value="Norfolk Island">Norfolk Island</option
                        ><option value="North Korea">North Korea</option
                        ><option value="Northern Mariana Islands"
                          >Northern Mariana Islands</option
                        ><option value="Norway">Norway</option
                        ><option value="Oman">Oman</option
                        ><option value="Pakistan">Pakistan</option
                        ><option value="Palau">Palau</option
                        ><option value="Palestine">Palestine</option
                        ><option value="Panama">Panama</option
                        ><option value="Papua New Guinea"
                          >Papua New Guinea</option
                        ><option value="Paraguay">Paraguay</option
                        ><option value="Peru">Peru</option
                        ><option value="Philippines">Philippines</option
                        ><option value="Pitcairn">Pitcairn</option
                        ><option value="Poland">Poland</option
                        ><option value="Portugal">Portugal</option
                        ><option value="Puerto Rico">Puerto Rico</option
                        ><option value="Qatar">Qatar</option
                        ><option value="Republic of Kosovo"
                          >Republic of Kosovo</option
                        ><option value="Reunion">Reunion</option
                        ><option value="Romania">Romania</option
                        ><option value="Russia">Russia</option
                        ><option value="Rwanda">Rwanda</option
                        ><option value="Saint Kitts and Nevis"
                          >Saint Kitts and Nevis</option
                        ><option value="Saint Lucia">Saint Lucia</option
                        ><option value="Saint Martin">Saint Martin</option
                        ><option value="Saint Vincent and the Grenadines"
                          >Saint Vincent and the Grenadines</option
                        ><option value="Samoa (Independent)"
                          >Samoa (Independent)</option
                        ><option value="San Marino">San Marino</option
                        ><option value="Sao Tome and Principe"
                          >Sao Tome and Principe</option
                        ><option value="Saudi Arabia">Saudi Arabia</option
                        ><option value="Senegal">Senegal</option
                        ><option value="Serbia">Serbia</option
                        ><option value="Seychelles">Seychelles</option
                        ><option value="Sierra Leone">Sierra Leone</option
                        ><option value="Singapore">Singapore</option
                        ><option value="Sint Maarten">Sint Maarten</option
                        ><option value="Slovakia">Slovakia</option
                        ><option value="Slovenia">Slovenia</option
                        ><option value="Solomon Islands">Solomon Islands</option
                        ><option value="Somalia">Somalia</option
                        ><option value="South Africa">South Africa</option
                        ><option
                          value="South Georgia and the South Sandwich Islands"
                          >South Georgia and the South Sandwich Islands</option
                        ><option value="South Korea">South Korea</option
                        ><option value="South Sudan">South Sudan</option
                        ><option value="Spain">Spain</option
                        ><option value="Sri Lanka">Sri Lanka</option
                        ><option value="St. Helena">St. Helena</option
                        ><option value="St. Pierre and Miquelon"
                          >St. Pierre and Miquelon</option
                        ><option value="Sudan">Sudan</option
                        ><option value="Suriname">Suriname</option>
                        <option value="Svalbard and Jan Mayen Islands"
                          >Svalbard and Jan Mayen Islands</option
                        ><option value="Swaziland">Swaziland</option
                        ><option value="Sweden">Sweden</option
                        ><option value="Switzerland">Switzerland</option
                        ><option value="Syria">Syria</option
                        ><option value="Taiwan">Taiwan</option
                        ><option value="Tajikistan">Tajikistan</option
                        ><option value="Tanzania">Tanzania</option
                        ><option value="Thailand">Thailand</option
                        ><option value="Timor-Leste">Timor-Leste</option
                        ><option value="Togo">Togo</option
                        ><option value="Tokelau">Tokelau</option
                        ><option value="Tonga">Tonga</option
                        ><option value="Trinidad and Tobago"
                          >Trinidad and Tobago</option
                        ><option value="Tunisia">Tunisia</option
                        ><option value="Turkey">Turkey</option
                        ><option value="Turkmenistan">Turkmenistan</option
                        ><option value="Turks &amp; Caicos Islands"
                          >Turks &amp; Caicos Islands</option
                        ><option value="Turks and Caicos Islands"
                          >Turks and Caicos Islands</option
                        ><option value="Tuvalu">Tuvalu</option
                        ><option value="Uganda">Uganda</option
                        ><option value="Ukraine">Ukraine</option
                        ><option value="United Arab Emirates"
                          >United Arab Emirates</option
                        ><option value="United Kingdom">United Kingdom</option
                        ><option value="Uruguay">Uruguay</option
                        ><option value="USA Minor Outlying Islands"
                          >USA Minor Outlying Islands</option
                        ><option value="Uzbekistan">Uzbekistan</option
                        ><option value="Vanuatu">Vanuatu</option
                        ><option value="Vatican City State (Holy See)"
                          >Vatican City State (Holy See)</option
                        ><option value="Venezuela">Venezuela</option
                        ><option value="Vietnam">Vietnam</option
                        ><option value="Virgin Islands (British)"
                          >Virgin Islands (British)</option
                        ><option value="Virgin Islands (U.S.)"
                          >Virgin Islands (U.S.)</option
                        ><option value="Wallis and Futuna Islands"
                          >Wallis and Futuna Islands</option
                        ><option value="Western Sahara">Western Sahara</option
                        ><option value="Yemen">Yemen</option
                        ><option value="Zambia">Zambia</option
                        ><option value="Zimbabwe">Zimbabwe</option></select
                      >
                    </div>
                  </div>
                </div>
              </div>

              <hr class="w-100 divider my-4" />

              <div class="row form-row">
                <div class="col-12 col-md-4 pb-3 pb-md-0 pl-3 pl-md-5">
                  <h4>Comments</h4>
                  <p class="text-lighter">Optional</p>
                </div>

                <div class="col-12 col-md-8 px-3 pl-md-0">
                  <!-- COMMENTS -->

                  <div class="form-group row mb-3">
                    <div class="col-md-10 ">
                      <textarea
                        type="text"
                        rows="3"
                        class="form-control"
                        autocapitalize="off"
                        autocorrect="off"
                        name="MERGE2"
                        id="MERGE2"
                        size="25"
                        value=""
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>

              <hr class="w-100 divider my-4" />

              <div class="row form-row px-md-5 align-items-center">
                <div class="col-12 col-md-9 d-flex text-center text-md-left">
                  <p class="text-lighter mb-4 mb-md-0">
                    <i
                      >We respect your privacy and promise to never rent or
                      share your details with anybody</i
                    >
                  </p>
                </div>
                <div
                  class="col-12 col-md-3 d-flex justify-content-center justify-content-md-end"
                >
                  <button type="submit" class="btn btn-primary">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </Layout>
</template>

<script>
import Data from '~/_settings/register.json';
import {
  BIcon,
  BIconCheckCircle,
  BIconChevronDown,
  BIconChevronUp,
} from 'bootstrap-vue';
import { BCollapse } from 'bootstrap-vue';

export default {
  components: {
    BCollapse,
    BIcon,
    BIconCheckCircle,
    BIconChevronDown,
    BIconChevronUp,
  },
  metaInfo: {
    title: 'Pricing',
  },

  data() {
    return {
      Data,
    };
  },
};
</script>

<style lang="scss">
.iama {
  color: white;
  text-align: center;
  margin: 0;
  padding-top: 10px;
  font-weight: 400;
}
.duration {
  display: flex;
  flex-direction: row;
}

.custom-control-label {
  cursor: pointer;
}

.nav-tabs {
  background-color: $blue-grey;
  border: none;
  padding: 10px 0 20px 0;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: transparent;
  color: $subtitle-light;
}

.nav-tabs .nav-link {
  /*border: none;
  border-radius: 0;
  border-bottom: 1px solid #dee2e63d;*/

  border: solid 1px rgba(255, 218, 216, 0.164);
  border-radius: 10px;
  margin: 5px;

  text-transform: uppercase;
  color: $subtitle-light;
  padding: 0.5rem 0.75rem;

  @media (min-width: $break-collapse) {
    padding: 0.5rem 1rem;
    margin: 0 10px;
  }

  &:hover {
    border: solid 1px rgba(255, 97, 88, 0.5);
    background-color: rgba(255, 97, 88, 0.05);
  }

  &.active {
    border: solid 1px rgba(255, 97, 88, 0.7);
    background-color: rgba(255, 97, 88, 0.2);
    color: white;
  }
}

.nav-tabs .nav-item {
  text-align: center;

  @media (min-width: $break-s) {
    min-width: 150px;
  }
  .nav-link:focus {
    outline: none;
  }
}

.tabs > :first-child {
  background-color: white;
  z-index: 10;
}

.form-container {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 90%;
  @media (min-width: $break-xl) {
    max-width: 75%;
  }
}

.form-row {
  padding: 2rem 0;
}

.radio-buttons {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: $break-l) {
    flex-direction: row;
  }
}

.form-check {
  margin: 0.5rem 0;

  @media (min-width: $break-collapse) {
    margin: 0;
  }
}
.form-check-input {
  visibility: hidden;
}

.form-check input:checked + .form-check-label {
  background-color: $primary;
  border: 1px solid $primary;
  color: $white;
}
</style>
