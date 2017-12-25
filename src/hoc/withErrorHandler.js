import React, {Fragment, Component } from 'react';

import Modal from '../components/common/Modal';
import Button from '../components/common/Button';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {
        state = {
            error: undefined
        }

        resetError = () => {
            this.setState({error: undefined});
        }
        componentWillMount() {
            this.requestInterceptor = axios.interceptors.request.use(request => {
                this.resetError();
                return request;
            });
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => this.setState({error: error}));
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        render() {
            return (
                <Fragment>
                    <Modal show={this.state.error} closeHandler={this.resetError}>
                        {this.state.error ? this.state.error.message : null}
                        <p style={{ textAlign: 'center' }}>
                            <Button type="Success" handler={this.resetError}>OK</Button>
                        </p>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
}

export default withErrorHandler;