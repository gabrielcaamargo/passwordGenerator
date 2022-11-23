import { useState } from 'react';
import { Container } from './styles';

import characters from '../../utils/characters';

export default function Main() {
  const [password, setPassword] = useState<string | null>(null);

  function handleCreatePassword() {
    let randomCharacters = '';

    for(let i = 0; i < 36; i++) {
      randomCharacters += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(randomCharacters);
  }

  return (
    <Container>
      <h1>passwordGen🔒</h1>

      <div className='password-container'>
        <button type='button' onClick={handleCreatePassword}>
          {password ? 'Generate new password' : 'Generate password'}
        </button>

        {password && (
          <div className="password-result">
            <p>{password}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
