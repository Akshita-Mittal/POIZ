<?php
   /**
    * Template Name: User-Detail
    */
    get_header();
   ?>
<section class="content-wrap">
   <div class="container address_container">
      <div class="row">
         <div class="col-md-4">
            <div class="user-tabs">
               <h2 class="user-heading">
                  Hello User
               </h2>
               <div class="signout-btn">
                  <a href="#">SIGN OUT</a>
               </div>
               <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                     <a class="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="true">
                     <span class="tab-image-green">
                     <img src="<?php echo get_stylesheet_directory_uri()?>/assets/images/order-green.png" />
                     </span>
                     <span class="tab-image-white" style="display: none">
                     <img src="<?php echo get_stylesheet_directory_uri()?>/assets/images/order-white.png" />
                     </span>
                     Orders
                     </a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link active" id="address-tab" data-toggle="tab" href="#address" role="tab" aria-controls="address" aria-selected="false">
                     <span class="tab-image-green">
                     <img src="<?php echo get_stylesheet_directory_uri()?>/assets/images/address-green.png" />
                     </span>
                     <span class="tab-image-white" style="display: none">
                     <img src="<?php echo get_stylesheet_directory_uri()?>/assets/images/address-white.png" />
                     </span>
                     Address
                     </a>
                  </li>
                  <li class="nav-item">
                     <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                     <span class="tab-image-green">
                     <img src="<?php echo get_stylesheet_directory_uri()?>/assets/images/profile-green.png" />
                     </span>
                     <span class="tab-image-white" style="display: none">
                     <img src="<?php echo get_stylesheet_directory_uri()?>/assets/images/profile-white.png" />
                     </span>
                     Profile Details
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div class="col-md-8">
            <div class="user-content">
               <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade" id="orders" role="tabpanel" aria-labelledby="orders-tab">...</div>
                  <div class="tab-pane fade show active" id="address" role="tabpanel" aria-labelledby="address-tab">
                     <div class="address-wrap">
                        <h2 class="address-heading">Address</h2>
                        <form class="address-form">
                           <div class="row">
                              <div class="col-md-6 mb-5">
                                  <label for="">First Name</label>
                                 <input type="text" class="form-control" value="Jane" placeholder="">
                              </div>
                              <div class="col-md-6 mb-5">
                                <label for="">Last Name</label>
                                 <input type="text" class="form-control" value="Doe" placeholder="">
                              </div>
                              <div class="col-md-12 mb-5">
                                  <label for="">Address</label>
                                 <input type="text" class="form-control" value="12/36 Lorem Ipsum, Street no. 5, Ipsum building" placeholder="">
                              </div>
                              <div class="col-md-4 mb-5">
                                  <label for="">Phone Number</label>
                                 <input type="text" class="form-control" value="987-654-321" placeholder="">
                              </div>
                              <div class="col-md-4 mb-5">
                                 <div class="select-option-wrap">
                                     <label for="">City</label>
                                    <select id="shipping_province" name="province" class="form-control ch-select select-shipping-province ch-dirty pristine touched invalid" aria-required="true" aria-invalid="true">
                                       <option value="New York">
                                          New York
                                       </option>
                                       <option value="Northern Territory">
                                          Northern Territory
                                       </option>
                                       <option value="Queensland">
                                          Queensland
                                       </option>
                                       <option value="South Australia">
                                          South Australia
                                       </option>
                                       <option value="Tasmania">
                                          Tasmania
                                       </option>
                                       <option value="Victoria">
                                          Victoria
                                       </option>
                                       <option value="Western Australia">
                                          Western Australia
                                       </option>
                                    </select>
                                    <!-- <label for="shipping_province" class="input-label"><span>City</span></label>  -->
                                    <!-- <div class="ch-select-arrow"></div> -->
                                 </div>
                              </div>
                              <div class="col-md-4 mb-5">
                                  <label for="">Postal Code</label>
                                 <input type="text" class="form-control" value="56781" placeholder="">
                              </div>
                              <div class="col-md-12">
                                 <h3 class="address-type-heading">
                                    Type of Address
                                 </h3>
                                 <div class="default-add-wrap">
                                    <div class="custom-control custom-radio">
                                       <input name="defaultaddress" type="radio" checked="" required="">
                                       <label>Default Address</label>
                                    </div>
                                    <div class="custom-control custom-radio">
                                       <input name="defaultaddress" type="radio" required="">
                                       <label>Other Address</label>
                                    </div>
                                    <div class="default-add-content">
                                       <div class="top-content">
                                          <h3 class="default-head">
                                             Default Address
                                             <span class="default-add">12/36 Lorem Ipsum, Street no. 5, Ipsum building, Ipsum-56781</span>
                                          </h3>
                                          <div class="add-action">
                                             <a href="#">Add</a>
                                             <a href="#">Edit</a>
                                             <a href="#">Delete</a>
                                          </div>
                                       </div>
                                       <div class="bottom-content">
                                          <div class="col-md-12 mb-5">
                                             <input type="text" class="form-control" placeholder="House no / building street / area, locality / town">
                                          </div>
                                          <div class="col-md-4 mb-5">
                                             <input type="text" class="form-control" placeholder="Postal code">
                                          </div>
                                          <button class="btn add-btn" type="submit">ADD</button>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
                  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div class="address-wrap">
                        <h2 class="address-heading">Profile</h2>
                        <form class="address-form">
                           <div class="row">
                              <div class="col-md-6 mb-5">
                                  <label for="">Name</label>
                                 <input type="text" class="form-control" value="Jane Doe" placeholder="">
                              </div>
                            

                              <div class="col-md-6 mb-5">
                                  <label for="">Phone Number</label>
                                 <input type="text" class="form-control" value="987-654-3210" placeholder="">
                              </div>
                              <div class="col-md-5 mb-5">
                                  <label for="">Email Address</label>
                                 <input type="email" class="form-control" value="shawn_jane_11@gmail.com" placeholder="">
                              </div>

                              <div class="col-md-4 mb-5">
                                  <label for="">Password</label>
                                 <input type="password" class="form-control" value="************" placeholder="">
                              </div>
                              <div class="col-md-3 align-self-center text-right">
                                
                              </div>
                              <button id="ch__pwd_btn">Change Password</button>
                              <div id="change_pswd " class="col-md-12" style="display:none">
                                <div class="bg">
                                <h5>Change Password</h5>
                                <div class="change_pswd_fild">
                                <div class="col-1-fild">
                                         <input type="password" class="form-control" placeholder="Old Password">
                                    </div>
                                    <div class="col-1-fild">
                                         <input type="password" class="form-control" placeholder="New Password">
                                    </div>
                                    <div class="col-1-fild">
                                         <input type="password" class="form-control" placeholder="Confirm Password">
                                    </div>
                                </div>
                                <button class="save_change_pwd">Save</button>
                                </div>
                                
                              </div>

                              <div class="col-md-6 mb-5">
                                  <label for="">Date of Birth</label>
                                 <input type="text" class="form-control" value="14th July, 1989" placeholder="">
                              </div>
                              <div class="col-md-6 mb-5">
                                 <div class="select-option-wrap">
                                     <label for="">Gender</label>
                                    <select id="shipping_province" name="province" class="form-control ch-select select-shipping-province ch-dirty pristine touched invalid" aria-required="true" aria-invalid="true">
                                       <option value="New York">
                                       Male
                                       </option>
                                       <option value="Northern Territory">
                                       Female
                                       </option>
                                       
                                    </select>
                                    <!-- <label for="shipping_province" class="input-label"><span>City</span></label>  -->
                                    <!-- <div class="ch-select-arrow"></div> -->
                                 </div>
                              </div>


                              <div class="col-md-12 mb-5">
                                  <label for="">Address</label>
                                 <input type="text" class="form-control" value="12/36 Lorem Ipsum, Street no. 5, Ipsum building" placeholder="">
                              </div>
                              <div class="col-md-4 mb-5">
                                 <div class="select-option-wrap">
                                     <label for="">Country</label>
                                    <select id="shipping_province" name="province" class="form-control ch-select select-shipping-province ch-dirty pristine touched invalid" aria-required="true" aria-invalid="true">
                                    <option data-code="US" value="United States">United States</option>
                                    <option data-code="CA" value="Canada">Canada</option>
                                    <option data-code="AU" value="Australia">Australia</option>
                                    <option data-code="GB" value="United Kingdom">United Kingdom</option>
                                    <option disabled="disabled" value="---">---</option>
                                    <option data-code="AU" value="Australia">Australia</option>
                                    <option data-code="BR" value="Brazil">Brazil</option>
                                    <option data-code="CA" value="Canada">Canada</option>
                                    <option data-code="FR" value="France">France</option>
                                    <option data-code="DE" value="Germany">Germany</option>
                                    <option data-code="NL" value="Netherlands">Netherlands</option>
                                    <option data-code="CH" value="Switzerland">Switzerland</option>
                                    <option data-code="GB" value="United Kingdom">United Kingdom</option>
                                    <option data-code="US" value="United States">United States</option>
                                       
                                    </select>
                                    <!-- <label for="shipping_province" class="input-label"><span>City</span></label>  -->
                                    <!-- <div class="ch-select-arrow"></div> -->
                                 </div>
                              </div>
                              <div class="col-md-4 mb-5">
                                <div class="select-option-wrap">
                                        <label for="">City</label>
                                        <select id="shipping_province" name="province" class="form-control ch-select select-shipping-province ch-dirty pristine touched invalid" aria-required="true" aria-invalid="true">
                                        <option value="New York">
                                            New York
                                        </option>
                                        <option value="Northern Territory">
                                            Northern Territory
                                        </option>
                                        <option value="Queensland">
                                            Queensland
                                        </option>
                                        <option value="South Australia">
                                            South Australia
                                        </option>
                                        <option value="Tasmania">
                                            Tasmania
                                        </option>
                                        <option value="Victoria">
                                            Victoria
                                        </option>
                                        <option value="Western Australia">
                                            Western Australia
                                        </option>
                                        </select>
                                        <!-- <label for="shipping_province" class="input-label"><span>City</span></label>  -->
                                        <!-- <div class="ch-select-arrow"></div> -->
                                    </div>
                              
                              
                              
                           </div>
                           <div class="col-md-4 mb-5">
                                  <label for="">Postal Code</label>
                                 <input type="text" class="form-control" value="56781" placeholder="">
                                 </div>  </div>
                       
                            </form>
                            

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<?php get_footer(); ?>