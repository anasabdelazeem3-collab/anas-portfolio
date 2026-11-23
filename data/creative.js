// Creative / marketing projects (non-ads case studies).
const t = (en, ar) => ({ en, ar });
const R = 'assets/art/roof/';
export const roofPyramisa = {
  id: 'roof-pyramisa',
  brand: 'Roof Pyramisa',
  title: t('Every table has a story', 'كل طاولة لها حكاية'),
  category: t('Creative concept · content · brand film', 'فكرة إبداعية · محتوى · فيلم للبراند'),
  films: [
    { src: R + 'video/brand-film-every-table.mp4', poster: R + 'video/brand-film-every-table-poster.jpg', title: t('Brand film — Every table has a story', 'فيلم البراند — كل طاولة لها حكاية'), orientation: 'landscape' },
    { src: R + 'video/romantic-moments.mp4', poster: R + 'video/romantic-moments-poster.jpg', title: t('Romantic moments', 'لحظات رومانسية'), orientation: 'portrait' },
    { src: R + 'video/chef-new-dish.mp4', poster: R + 'video/chef-new-dish-poster.jpg', title: t("The chef's new dish", 'طبق الشيف الجديد'), orientation: 'portrait' },
  ],
  stills: [
    [R + 'every-table-meeting.jpg', t('Every table has a story — business', 'كل طاولة لها حكاية — اجتماع عمل')],
    [R + 'every-table-study.jpg', t('Every table has a story — study', 'كل طاولة لها حكاية — مذاكرة')],
    [R + 'family-birthday.jpg', t('When the family gathers', 'لما العيلة تتجمع')],
    [R + 'chef-passion.jpg', t('Every dish made with passion', 'كل طبق بيتحضر بشغف')],
    [R + 'signature-dishes.jpg', t('Signature dishes', 'من أشهر أطباقنا')],
    [R + 'romantic-rose.jpg', t('Romantic moments', 'لحظات رومانسية')],
    [R + 'family-celebration-wide.jpg', t('The family celebration', 'احتفال العيلة')],
  ].map(([src, caption]) => ({ src, caption })),
};
