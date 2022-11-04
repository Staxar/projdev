import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import Layout from "./layout";

test('render layout', () => {
    render(<Layout />)
    expect(screen.getByTestId('test-layout')).toBeInTheDocument();
  });