import React, { Component } from "react";
import "./DropDownFilter.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Button from "./../Button/Button";

class DropdownFilter extends Component {
  state = {
    dropdownVisible: false,
  };

  toggleDropdown = (e) => {
    if (!this.state.dropdownVisible) {
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }
    this.setState((prevState) => ({
      dropdownVisible: !prevState.dropdownVisible,
    }));
  };

  handleOutsideClick = (e) => {
    if (!this.node.contains(e.target)) this.toggleDropdown();
  };

  renderDropdownFilter = () => {
    return (
      <form onSubmit={this.props.filterCats}>
        <div className="dropdown__body">
          <div>
            <label htmlFor="gender" className="dropdown__label">
              Gender
              <div>
                <div>
                  <div className="dropdown__input">
                    <label>
                      <input type="checkbox" value="male" name="male" />
                      <span>Male</span>
                    </label>
                  </div>
                </div>
                <div className="dropdown__input">
                  <label>
                    <input type="checkbox" value="female" name="female" />
                    <span>Female</span>
                  </label>
                </div>
              </div>
            </label>
          </div>
          <div>
            <label htmlFor="age" className="dropdown__label">
              Age
              <div>
                <div className="dropdown__input">
                  <label>
                    <input type="checkbox" value="kitty" name="kitty" />
                    <span>Kitty</span>
                  </label>
                </div>
                <div className="dropdown__input">
                  <label>
                    <input type="checkbox" value="young" name="young" />
                    <span>Young</span>
                  </label>
                </div>
                <div className="dropdown__input">
                  <label>
                    <input type="checkbox" value="adult" name="adult" />
                    <span>Adult</span>
                  </label>
                </div>
                <div className="dropdown__input">
                  <label>
                    <input type="checkbox" value="senior" name="senior" />
                    <span>Senior</span>
                  </label>
                </div>
              </div>
            </label>
          </div>
          <div>
            <select name="city" id="city" className="dropdown__select">
              <option hidden>Select a City</option>
              <option value="" name="">
                Select a City
              </option>
              <option value="airdrie" name="airdrie">
                Toronto
              </option>
              <option value="calgary" name="calgary">
                North York
              </option>
              <option value="edmonton" name="edmonton">
              Mississauga
              </option>
              <option value="Grande Prairie" name="Grande Prairie">
              Scarborough
              </option>
              <option value="Red Deer" name="Red Deer">
              Etobicoke
              </option>
            </select>
          </div>
          <div className="dropdown__buttons">
            <Button
              children={"View Matches"}
              className="dropdown__buttons-matches"
            />
            <Button
              children={"Clear"}
              onClick={this.props.handleClearFilter}
              className="dropdown__buttons-clear"
            />
          </div>
        </div>
      </form>
    );
  };

  render() {
    return (
      <div
        className="dropdown__container"
        ref={(node) => {
          this.node = node;
        }}
      >
        <div className="dropdown__trigger">
          <FontAwesomeIcon
            icon={faFilter}
            onClick={this.toggleDropdown}
            className="dropdown__icon-filter"
          />
        </div>
        {this.state.dropdownVisible && this.renderDropdownFilter()}
      </div>
    );
  }
}

export default DropdownFilter;
