<?php
/* Template Name: Projects Page */
get_header();
?>

<!-- Projects Section Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
            <h5 class="fw-bold text-primary text-uppercase">Our Projects</h5>
            <h1 class="mb-0">Explore Our Latest Work</h1>
        </div>
        <div class="row g-5">
            <?php
            $args = array(
                'post_type' => 'project',
                'posts_per_page' => 6,
            );
            $projects = new WP_Query($args);
            if ($projects->have_posts()) :
                while ($projects->have_posts()) : $projects->the_post();
            ?>
            <div class="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                <div class="project-item bg-light rounded overflow-hidden">
                    <div class="project-img position-relative overflow-hidden">
                        <?php if (has_post_thumbnail()) : ?>
                            <img class="img-fluid" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                        <?php endif; ?>
                        <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="<?php the_permalink(); ?>">
                            <?php the_title(); ?>
                        </a>
                    </div>
                    <div class="p-4">
                        <h4 class="mb-3"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                        <p><?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?></p>
                        <a class="text-uppercase" href="<?php the_permalink(); ?>">View Project <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <?php
                endwhile;
                wp_reset_postdata();
            else :
                echo '<p>No projects found.</p>';
            endif;
            ?>
        </div>
    </div>
</div>
<!-- Projects Section End -->

<!-- Footer -->
<?php get_footer(); ?>
