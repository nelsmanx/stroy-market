export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: 'h-42 cursor-pointer [--spacing:1px]',
        label: 'label leading-[1.2] tracking-[0.01em]',
        leadingIcon: 'icon-leading',
        trailingIcon: 'icon-trailing',
      },
      variants: {
        size: {
          md: {
            base: 'gap-10 px-20 rounded-xl',
          },
        },
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-primary hover:bg-primary text-[#fcfdff]',
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'bg-secondary hover:bg-secondary text-[#262424]',
        },
      ],
    },
  },
});
