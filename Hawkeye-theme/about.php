<?php
/* Template Name: About Page */
get_header();
?>

<!-- About Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-7">
                <div class="section-title position-relative pb-3 mb-5">
                    <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                </div>
                <p class="mb-4">
                    <?php 
                    $about_content2 = get_option('hawkeye_about_content');
                    echo !empty($about_content2) ? wp_kses_post($about_content2) : "Founded in 2022 and based in Houston, Texas, Hawkeye Core is an IT consulting company committed to delivering cutting-edge technology solutions that empower businesses to excel in today’s competitive landscape. We specialize in a broad range of services, including the development and deployment of software agents, IT consulting, app and website support, network solutions, and professional training. At Hawkeye Core, our team of skilled professionals is dedicated to understanding your unique business challenges and crafting tailored solutions that drive efficiency, enhance security, and optimize performance. Whether you are seeking to improve your existing systems or implement new technologies, we are your trusted partner in achieving technological excellence. Our mission is to help businesses leverage advanced IT solutions to streamline operations, improve user experiences, and foster long-term growth. With a focus on innovation and client satisfaction, Hawkeye Core ensures that your business remains agile and ahead in an ever-changing digital landscape.";
                    ?>
                </p>
                <div class="row g-0 mb-3">
                    <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Satisfied Customers</h5>
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                    </div>
                    <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Support</h5>
                        <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                    </div>
                </div>
                <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                    <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                        <i class="fa fa-phone-alt text-white"></i>
                    </div>
                    <div class="ps-4">
                        <h5 class="mb-2">Call to ask any question</h5>
                        <h4 class="text-primary mb-0">
                            <a href="tel:+12817607332" class="text-primary">+1 281-760-7332</a>
                        </h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-5" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="<?php echo get_template_directory_uri(); ?>/img/about1.jpg" style="object-fit: cover;">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- About End -->

<!-- Footer -->
<?php get_footer(); ?>