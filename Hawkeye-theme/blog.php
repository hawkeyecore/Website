<?php
/* Template Name: Blog Page */
get_header();
?>

<!-- Blog Start -->
<div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
        <div class="row g-5">
            <!-- Blog list Start -->
            <div class="col-lg-8">
                <div class="row g-5">
                    <?php 
                    if (have_posts()) : 
                        while (have_posts()) : 
                            the_post(); 
                    ?>
                    <div class="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                        <div class="blog-item bg-light rounded overflow-hidden">
                            <div class="blog-img position-relative overflow-hidden">
                                <?php if (has_post_thumbnail()) : ?>
                                    <img class="img-fluid" src="<?php the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
                                <?php endif; ?>
                                <a class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="<?php the_permalink(); ?>">
                                    <?php the_category(', '); ?>
                                </a>
                            </div>
                            <div class="p-4">
                                <div class="d-flex mb-3">
                                    <small class="me-3"><i class="far fa-user text-primary me-2"></i><?php the_author(); ?></small>
                                    <small><i class="far fa-calendar-alt text-primary me-2"></i><?php echo get_the_date(); ?></small>
                                </div>
                                <h4 class="mb-3"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
                                <p><?php echo wp_trim_words(get_the_excerpt(), 20, '...'); ?></p>
                                <a class="text-uppercase" href="<?php the_permalink(); ?>">Read More <i class="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <?php 
                        endwhile; 
                        wp_reset_postdata();
                    else :
                        echo '<p>No blog posts found.</p>';
                    endif; 
                    ?>
                </div>
                <div class="col-12 wow slideInUp" data-wow-delay="0.1s">
                    <nav aria-label="Page navigation">
                        <?php 
                            the_posts_pagination(array(
                                'mid_size'  => 2,
                                'prev_text' => '<i class="bi bi-arrow-left"></i>',
                                'next_text' => '<i class="bi bi-arrow-right"></i>',
                            )); 
                        ?>
                    </nav>
                </div>
            </div>
            <!-- Blog list End -->

            <!-- Sidebar Start -->
            <div class="col-lg-4">
                <?php get_sidebar(); ?>
            </div>
            <!-- Sidebar End -->
        </div>
    </div>
</div>
<!-- Blog End -->

<!-- Footer -->
<?php get_footer(); ?>
