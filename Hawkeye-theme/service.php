<?php
/* Template Name: Services Page */
get_header();
?>

<!-- Services Section Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 class="mb-0">High-Quality IT Solutions</h1>
        </div>
        <div class="row g-5">
            <?php
            $args = array(
                'post_type' => 'service',
                'posts_per_page' => 6,
            );
            $services = new WP_Query($args);
            if ($services->have_posts()) :
                while ($services->have_posts()) : $services->the_post();
            ?>
            <div class="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                <div class="service-item bg-light rounded p-4">
                    <div class="d-flex align-items-center mb-3">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                            <i class="fa fa-cogs text-white"></i>
                        </div>
                        <h4 class="mb-0 ms-3"><?php the_title(); ?></h4>
                    </div>
                    <p><?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?></p>
                    <a class="text-uppercase" href="<?php the_permalink(); ?>">Read More <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
                echo '<p>No services found.</p>';
            endif;
            ?>
        </div>
    </div>
</div>
<!-- Services Section End -->

<!-- Footer -->
<?php get_footer(); ?>
