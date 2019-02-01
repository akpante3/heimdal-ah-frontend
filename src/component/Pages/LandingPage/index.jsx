import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';

import { getArticles } from '../../../actions/homeArticles/articleActions';
import StanadardCard from './StandardCards';
import FeaturedCard from './FeaturedCard';
// import ArticleCard from '../../ui/cards/ArticleCard/ArticleCard';
import RecentCard from './RecentCard';
import LoadingSpinner from '../../ui/loadingSpinners/LoadingSpinner';

/**
 * @description - This class enables new users to Signup on the platform
 * @param {func} setErrors  - A dispatchable errorAction to set errors in state
 * @param {func} removeAnError  - A dispatchable errorAction to clear one error from state
 * @param {func} clearErrors  - A dispatchable errorAction to clear the error state
 * @param {func} signupUser  - A dispatchable authAction to enable signup
 * @param {object} SignupForm  - A Form component that takes in props
 * @returns {object} The rendered Component
 */
class LandingPage extends Component {
  state = {
    // errors: {},
  };

  componentDidMount() {
    const { actions } = this.props;
    actions.getArticles();
  }

  render() {
    const { featuredArticles, recentArticles, mainArticles } = this.props.home;
    const { errors } = this.props;

    if (featuredArticles.length > 0) {
      return (
        <div className="col-md-12 p-5">
          {/** Featured Articles Section Start */}
          <h2 className="text-center">Featured</h2>
          <div className="row p-3">
            <div className="col-md-3 col-sm-4">{<StanadardCard {...featuredArticles[0]} />}</div>
            <div className="col-md-6 col-sm-4 mt-4">
              <div className="row">
                {featuredArticles.slice(1, 5).map(item => (
                  <div className="col-md-6 col-sm-12 mb-2" key={Math.random()}>
                    <FeaturedCard {...item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-3 col-sm-4">{<StanadardCard {...featuredArticles[5]} />}</div>
          </div>
          {/** Featured Articles Section Start */}

          <div className="row p-3 mb-5">
            <div className="col-md-10">
              {/** Main Articles Section Start */}
              <div className="row p-5">
                {mainArticles.map(item => (
                  <div className="col-md-4" key={Math.random()}>
                    <StanadardCard {...item} />
                  </div>
                ))}
              </div>
            </div>
            {/** Main Articles Section End */}

            {/** Aside Card Section Start */}
            <div className="col-md-2 pt-5">
              <div className="card p-3">
                <div className="tags mb-5">
                  <span className="text-center h4">Tags</span>
                  <hr />
                  <Link to="/a" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />
                      Beauty
                    </label>
                  </Link>
                  <Link to="/a" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />
                      Beauty
                    </label>
                  </Link>
                  <Link to="/a" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />
                      Beauty
                    </label>
                  </Link>
                  <Link to="/a" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />
                      Beauty
                    </label>
                  </Link>
                  <Link to="/a" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />
                      Beauty
                    </label>
                  </Link>
                  <Link to="/a" className="form-check text-dark pb-2">
                    <label htmlFor="beauty" className="form-check-label">
                      <input type="radio" className="form-check-input" name="optradio" />
                      Beauty
                    </label>
                  </Link>
                </div>

                <div className="recent-posts">
                  <span className="text-center h4">Recent posts</span>
                  <hr />
                  {recentArticles.map(item => (
                    <Link
                      to={`/${item.user.profile.username}/articles/${item.slug}`}
                      className="text-dark pb-2 list-group-flush list-group-item"
                      key={Math.random()}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <img
                            className="img-fluid rounded-circle"
                            width="40"
                            src={`https://picsum.photos/1200/1300/?image=${Math.trunc(
                              Math.random() * 20,
                            )}`}
                            alt="Card"
                          />
                          <span className="p-2">{item.title}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/** Aside Card Section End */}

            <div className="text-center col-md-12">
              <Link to="/" className="btn btn-secondary">
                All Stories
              </Link>
            </div>
          </div>

          {/** Recent Articles Section Start */}
          <h2 className="text-center">Recent Posts</h2>
          <div className="row">
            {recentArticles.slice(0, 4).map(item => (
              <div className="col-md-3 mb-2" key={Math.random()}>
                <RecentCard {...item} />
              </div>
            ))}
          </div>
          {/** Recent Articles Section End */}
        </div>
      );
    }
    if (errors && errors.mainError) {
      return (
        <div className="col-12 text-center">
          <h2>{errors.mainError}</h2>
        </div>
      );
    }
    return (
      <div className="col-12 text-center">
        <LoadingSpinner isLoading />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
  home: state.home,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getArticles,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingPage);