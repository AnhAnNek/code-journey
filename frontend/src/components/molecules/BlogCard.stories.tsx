import type { Meta, StoryObj } from '@storybook/react';
import { BlogCard } from './BlogCard';

const meta = {
  title: 'Molecules/BlogCard',
  component: BlogCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof BlogCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    slug: 'example-post',
    title: 'An Example Blog Post',
    description: 'This is a brief summary of the example blog post to show how it looks in the card component.',
    publishDate: '2026-04-03',
    tags: ['Next.js', 'React', 'Storybook'],
    readingTime: '5 min read',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LongTitle: Story = {
  args: {
    ...Default.args,
    title: 'This is a Very Long Title Which Should Probably Wrap or Be Truncated Depending on the Container Size and CSS',
  },
  decorators: Default.decorators,
};

export const ManyTags: Story = {
  args: {
    ...Default.args,
    tags: ['React', 'Next.js', 'Storybook', 'Tailwind', 'CSS', 'Frontend', 'Web Dev'],
  },
  decorators: Default.decorators,
};
