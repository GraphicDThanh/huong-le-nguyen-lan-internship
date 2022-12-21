import iconPin from '../../assets/icons/icon-pin.svg';
import iconColorBoard from '../../assets/icons/icon-color-board.svg';

const formAddNote = () => {
  const formControl = document.createElement('div');
  formControl.setAttribute('class', 'note-wrapper');

  formControl.innerHTML = `
    <div class="form-control">
      <form class="form-note form-add-note" id="form-add-note">
        <div class="form-title hide">
          <div class="form-group">
            <textarea name="title" class="input-note note-title" rows="1" placeholder="Title"></textarea>
            <figure class="icon-pin-cover">
              <img src="${iconPin}" alt="icon pin">
            </figure>
          </div>
        </div>
        <div class="form-group form-group-input">
          <textarea name="description" class="input-note note-description" rows="1" placeholder="Take a note..."></textarea>
        </div>
        <div class="form-utilities hide">
          <div class="form-group">
            <div class="item-utilities">
              <img src="${iconColorBoard}" alt="icon color board">
            </div>
            <div class="form-buttons">
              <button class="btn btn-close" type="submit">Close</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  `;

  return formControl;
};

export default formAddNote;
