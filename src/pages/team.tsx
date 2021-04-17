import React from 'react';
import { PageProps } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import TeamCard from 'components/TeamCard';

const TeamPage: React.FC<PageProps> = () => (
	<Layout>
		<SEO title="Team" />
		<h1>Team Page</h1>
		<div className="container">
			<div className="row">
				<div className="col">
					<TeamCard />
				</div>
				<div className="col">
					<TeamCard />
				</div>
				<div className="col">
					<TeamCard />
				</div>
			</div>
		</div>
	</Layout>
);

export default TeamPage;
