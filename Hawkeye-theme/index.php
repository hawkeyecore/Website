<?php
/* Template Name: Home Page */
get_header();
?>

<!-- About Section Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-7">
                <div class="section-title position-relative pb-3 mb-5">
                    <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                    <h1 class="mb-0"><?php the_title(); ?></h1>
                </div>
                <p class="mb-4">
                    <?php 
                    $about_content = get_option('hawkeye_about_content');
                    echo !empty($about_content) ? wp_kses_post($about_content) : "Founded in 2022 and based in Houston, Texas, Hawkeye Core is an IT consulting company committed to delivering cutting-edge technology solutions that empower businesses to excel in today’s competitive landscape.";
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
                        <h4 class="text-primary mb-0"><?php echo get_option('hawkeye_phone', '+1 281-760-7332'); ?></h4>
                    </div>
                </div>
            </div>
            <div class="col-lg-5" style="min-height: 500px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" 
                        src="<?php echo get_template_directory_uri(); ?>/img/about1.jpg" style="object-fit: cover;">
                </div>
            </div>
        </div>
    </div>
</div>
<!-- About Section End -->

<!-- Features Section Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 class="mb-0"><?php echo get_option('hawkeye_features_title', 'We Are Here to Grow Your Business Exponentially'); ?></h1>
        </div>
        <div class="row g-5">
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-cubes text-white"></i>
                        </div>
                        <h4>Best In Industry</h4>
                        <p class="mb-0"><?php echo get_option('hawkeye_feature_1', 'Building top-tier websites and coding solutions with innovation, precision, and reliability.'); ?></p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-award text-white"></i>
                        </div>
                        <h4>Customized Solutions</h4>
                        <p class="mb-0"><?php echo get_option('hawkeye_feature_2', 'Tailored IT and tech services that meet your specific business needs.'); ?></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
                <div class="position-relative h-100">
                    <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" 
                        src="<?php echo get_template_directory_uri(); ?>/img/feature1.jpg" style="object-fit: cover;">
                </div>
            </div>
            <div class="col-lg-4">
                <div class="row g-5">
                    <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-users-cog text-white"></i>
                        </div>
                        <h4>Professional Staff</h4>
                        <p class="mb-0"><?php echo get_option('hawkeye_feature_3', 'Skilled IT and tech experts delivering innovative solutions with precision and excellence.'); ?></p>
                    </div>
                    <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                        <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <h4>Support</h4>
                        <p class="mb-0"><?php echo get_option('hawkeye_feature_4', 'Reliable support, ensuring seamless IT solutions and continuous tech assistance for your business success.'); ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Features Section End -->


<!-- Service Section Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 class="mb-0"><?php echo get_option('hawkeye_services_title', 'Custom IT Solutions for Your Successful Business'); ?></h1>
        </div>
        <div class="row g-5">
        
            <?php
            $services = array(
                array(
                    'icon' => 'fa fa-code',
                    'title' => 'Web Solutions Development',
                    'description' => 'Custom web solutions for seamless user experiences.',
                    'link' => '#'
                ),
                array(
                    'icon' => 'fa fa-cogs',
                    'title' => 'Custom Software Development',
                    'description' => 'Tailored software solutions for your business needs.',
                    'link' => '#'
                ),
                array(
                    'icon' => 'fa fa-graduation-cap',
                    'title' => 'Professional Tech Training',
                    'description' => 'Expert tech solutions for business growth.',
                    'link' => '#'
                )
            );

            foreach ($services as $service) : ?>
                <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                    <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                        <div class="service-icon">
                            <i class="<?php echo esc_attr($service['icon']); ?> text-white"></i>
                        </div>
                        <h4 class="mb-3"><?php echo esc_html($service['title']); ?></h4>
                        <p class="m-0"><?php echo esc_html($service['description']); ?></p>
                        <a class="btn btn-lg btn-primary rounded" href="<?php echo esc_url($service['link']); ?>">
                            <i class="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
            <?php endforeach; ?>

            <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                    <h3 class="text-white mb-3">Call Us For Quote</h3>
                    <h2 class="text-white mb-0"><?php echo get_option('hawkeye_phone', '+1 281-760-7332'); ?></h2>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Service Section End -->



<!-- Footer Start -->
<?php get_footer(); ?>
