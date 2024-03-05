import type {Meta, StoryObj} from "@storybook/react";

import {Avatar} from "../components/Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Avatar",
  component: ({theme, ...args}) => {
    return <div className={theme}><Avatar {...args} /></div>
  },
  argTypes: {
    theme: {
      control: 'radio', // Use radio buttons for selection
      options: ['light', 'dark'], // Define the options for the theme
      description: 'The theme for the Avatar component', // A brief description of what this arg does
    },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    theme: "dark"
  }
};

