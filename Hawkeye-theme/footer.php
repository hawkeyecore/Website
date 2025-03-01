<!-- Footer Start -->
<div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container">
        <div class="row gx-5">
            <div class="col-lg-4 col-md-6 footer-about">
                <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                    <a href="<?php echo home_url(); ?>" class="navbar-brand">
                        <h1 class="m-0 text-white"><?php bloginfo('name'); ?></h1>
                    </a>
                    <p class="mt-3 mb-4"><?php echo get_option('hawkeye_footer_description', 'Founded in 2022 and based in Houston, Texas, Hawkeye Core is an IT consulting company committed to delivering cutting-edge technology solutions that empower businesses to excel in today’s competitive landscape. We specialize in a broad range of services, including the development and deployment of software agents, IT consulting, app and website support, network solutions, and professional training.'); ?></p>
                </div>
            </div>
            <div class="col-lg-8 col-md-6">
            <div class="row gx-5">
                <div class="col-lg-4 col-md-12 pt-5 mb-5">
                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                        <h3 class="text-light mb-0"><?php echo __('Get In Touch', 'hawkeye'); ?></h3>
                    </div>
                    <div class="d-flex mb-2">
                        <i class="bi bi-geo-alt text-primary me-2"></i>
                        <p class="mb-0"><a style="color: aliceblue;" href="#"><?php echo get_option('hawkeye_address', 'Houston, TX, USA'); ?></a></p>
                    </div>
                    <div class="d-flex mb-2">
                        <i class="bi bi-envelope-open text-primary me-2"></i>
                        <p class="mb-0"><a style="color: aliceblue;" href="mailto:<?php echo get_option('hawkeye_email', 'info@hawkeye-core.com'); ?>">
                            <?php echo get_option('hawkeye_email', 'info@hawkeye-core.com'); ?></a></p>
                    </div>
                    <div class="d-flex mb-2">
                        <i class="bi bi-telephone text-primary me-2"></i>
                        <p class="mb-0"><a style="color: aliceblue;" href="tel:<?php echo get_option('hawkeye_phone', '+1 281-760-7332'); ?>">
                            <?php echo get_option('hawkeye_phone', '+1 281-760-7332'); ?></a></p>
                    </div>
                    <div class="d-flex mt-4">
                        <a class="btn btn-primary btn-square me-2" href="<?php echo get_option('hawkeye_twitter', 'https://x.com/Hawkeye_core?s=09'); ?>">
                            <i class="fab fa-x-twitter fw-normal"></i>
                        </a>
                        <a class="btn btn-primary btn-square me-2" href="<?php echo get_option('hawkeye_facebook', 'https://www.facebook.com/profile.php?id=61573424889325&locale=ar_AR'); ?>">
                            <i class="fab fa-facebook-f fw-normal"></i>
                        </a>
                        <a class="btn btn-primary btn-square me-2" href="<?php echo get_option('hawkeye_linkedin', 'https://www.linkedin.com/in/tom-stevens-a11a54346/'); ?>">
                            <i class="fab fa-linkedin-in fw-normal"></i>
                        </a>
                        <a class="btn btn-primary btn-square" href="<?php echo get_option('hawkeye_instagram', 'https://www.instagram.com/hawkeye_core?igsh=c3U3c3NycDFoMDBk'); ?>">
                            <i class="fab fa-instagram fw-normal"></i>
                        </a>
                    </div>
                </div>

                <div style="width: 350px;" class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                        <h3 class="text-light mb-0"><?php echo __('Services', 'hawkeye'); ?></h3>
                    </div>
                    <div class="link-animated d-flex flex-column justify-content-start">
                        <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i><?php echo __('Custom Software Development', 'hawkeye'); ?></a>
                        <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i><?php echo __('Web Solutions Development', 'hawkeye'); ?></a>
                    </div>
                </div>
            </div>
        </div>



        <div class="container-fluid text-white" style="background: #061429;">
    <div class="container text-center">
        <div class="row justify-content-end">
            <div class="col-lg-8 col-md-6">
                <div class="d-flex align-items-center justify-content-center" style="height: 75px;">
                    <p class="mb-0">
                        &copy; <a class="text-white border-bottom" href="<?php echo home_url(); ?>">
                            <?php bloginfo('name'); ?>
                        </a> <?php echo date('Y'); ?>. <?php echo __('All Rights Reserved.', 'hawkeye'); ?>

                        <!-- /*** Keeping the footer attribution as per the template license ***/ -->
                        <?php if (!get_option('hawkeye_credit_removal')) : ?>
                            <span>
                                <?php echo __('Designed/Hosted by', 'hawkeye'); ?>
                                <a class="text-white border-bottom" href="https://pforh.net">Power 4 Host</a>
                            </span>
                        <?php endif; ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Footer End -->

<!-- Back to Top -->
<a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top">
    <i class="bi bi-arrow-up"></i>
</a>

<?php wp_footer(); ?>

<!-- JavaScript Libraries -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/wow/wow.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/easing/easing.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/waypoints/waypoints.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/counterup/counterup.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/owlcarousel/owl.carousel.min.js"></script>

<!-- Template JavaScript -->
<script src="<?php echo get_template_directory_uri(); ?>/js/main.js"></script>

<?php wp_footer(); ?>
</body>
</html>
