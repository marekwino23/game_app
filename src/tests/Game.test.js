import { fireEvent, render, screen } from '@testing-library/react';
import Game from '../components/Game';


describe("Tic tac toe", () => {
  it('renders properly', () => {
    render(<Game />);
    const board = screen.getByTestId("board");
    const button = screen.getByRole('button', { name: /Reset/ });
    const cells= screen.getAllByTestId("cel")
    expect(button).toBeInTheDocument();
    expect(cells).toHaveLength(9);
    expect(board).toBeInTheDocument();
  });
  it('should check reset function', () => {
    render(<Game />);
    const button = screen.getByRole('button', { name: /Reset/ });
    const cells = screen.getAllByTestId("cel");
    screen.debug();
    fireEvent.click(button);
    cells.forEach((cell) => expect(cell).toHaveTextContent(''));
  });
  it('should check mark X', () => {
    render(<Game />);
    const cells = screen.getAllByTestId("cel");
    let move = 'O';
    cells.forEach((cell) => {
      fireEvent.click(cell);
      expect(cell).toHaveTextContent( move === 'O' ? 'X': 'O')
      move = move ==='O' ? 'X' : 'O';
    })
  });
})

